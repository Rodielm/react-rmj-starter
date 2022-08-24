import { createMachine } from "xstate";

const bookingMecha = createMachine({
  id: "buy plane tickets",
  initial: "inicial",
  states: {
    inicial: {
      on: {
        START: "search",
      },
    },
    search: {
      on: {
        CONTINUE: "passengers",
        CANCEL: "inicial",
      },
    },
    passengers: {
      on: {
        DONE: "tickets",
        CANCEL: "inicial",
      },
    },
    tickets: {
      on: {
        FINISH: "inicial",
      },
    },
  },
});

export default bookingMecha;