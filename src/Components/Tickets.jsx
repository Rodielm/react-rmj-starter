import React from 'react';

export const Tickets = ({ state, send }) => {
  const finish = () => {
    send("FINISH")
  };

  const { selectedCountry, passengers } = state.context;

  return (
    <>
      <p>Gracias por volar con book a fly 💚</p>
      <div className='is-flex has-justify-center has-text-center'>
        <div className='has-m-2 has-p-4 is-rounded' style={{ backgroundColor: "rgb(163, 190, 140)" }}>{selectedCountry}</div>
        <div className='has-m-6 has-p-2 is-rounded' style={{ backgroundColor: "rgb(216, 222, 233)" }}>
          <span>✈</span>
          {passengers.map((person, idx) => <p key={idx}>{person}</p>)}
        </div>
      </div>

      <button onClick={finish} className='button is-success'>Finalizar</button>
    </>
  );
}; 