import React from 'react';

export const Tickets = ({ state, send }) => {
  const finish = () => {
    send("FINISH")
  };

  const { selectedCountry, passengers } = state.context;

  return (
    <>
      <p>Gracias por volar con book a fly 💚</p>
      <div className='is-flex has-content-center'>
        <div className='has-w-32 has-p-6' style={{backgroundColor: "rgb(163, 190, 140)", borderRight: "dashed 2px black"}}>{selectedCountry}</div>
        <div className='has-p-4' style={{ backgroundColor: "rgb(216, 222, 233)" }}>
          <span>✈</span>
          {passengers.map((person, idx) => <p key={idx}>{person}</p>)}
        </div>
      </div>

      <button onClick={finish} className='button is-success has-pt-1 has-pb-1 has-pl-3 has-pr-3 has-mt-1'>Finalizar</button>
    </>
  );
}; 