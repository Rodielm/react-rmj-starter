import { assign, createMachine } from "xstate";
import { fetchCountries } from "../Utils/api";

// fill countries by api
const fillCountries = {
  initial: "loading",
  states: {
    loading: {
      invoke: {
        id: "getCountries",
        src: () => fetchCountries,
        onDone: {
          target: 'success',
          actions: assign({
            countries: (context, e) => e.data,
          })
        },
        onError: {
          target: 'failure',
          actions: assign({
            error: 'Request failed'
          })
        }
      },
      on: {
        DONE: "success",
        ERROR: "failure",
      },
    },
    success: {},
    failure: {
      on: {
        RETRY: { target: "loading" },
      },
    },
  },
};

const bookingMecha = createMachine({
  id: "buy plane tickets",
  initial: "initial",
  context: {
    passengers: [],
    selectedCountry: "",
    countries: [],
    error: ''
  },
  states: {
    initial: {
      on: {
        START: {
          target: "search",
          actions: "backInitial"
        }
      },
    },
    search: {
      // 1st approach action
      on: {
        CONTINUE: {
          target: 'passengers',
          actions: assign({
            selectedCountry: (context, e) => e.selectedCountry
          })
        },
        CANCEL: {
          target: "initial",
          actions: "clearData"
        },
      },
      ...fillCountries,
    },
    passengers: {
      on: {
        DONE: {
          target: "tickets",
          cond: "moreThanOnePassenger"
        },
        // 2nd approach action
        CANCEL: {
          target: "initial",
          actions: "clearData"
        },
        ADD: {
          target: 'passengers',
          actions: assign(
            (context, e) => context.passengers.push(e.newPassenger)
          )
        }
      },
    },
    tickets: {
      // after: {
      //   5000: {
      //     target: 'initial',
      //     actions: 'clearData'
      //   }
      // },
      on: {
        FINISH: "initial",
      },
    },
  },
},
  {
    actions: {
      clearData: assign({
        selectedCountry: "",
        passengers: []
      }),
      backInitial: () => console.log("Process transition"),
    },
    guards: {
      moreThanOnePassenger: context => {
        return context.passengers?.length > 0;
      }
    },
  });

export default bookingMecha;