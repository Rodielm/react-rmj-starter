import React from 'react';
import './Tickets.css';

export const Tickets = ({ state, send }) => {
  const finish = () => {
    send("FINISH")
  };

  const { selectedCountry, passengers } = state.context;

  return (
    <div className='Tickets'>
      <p className='Tickets-description description'>Gracias por volar con book a fly 💚</p>
      <div className='Tickets-ticket'>
        <div className='Tickets-country'>{selectedCountry}</div>
        <div className='Tickets-passengers'>
          <span>✈</span>
          {passengers.map((person, idx) => <p key={idx}>{person}</p>)}
        </div>
      </div>
      <button onClick={finish} className='Tickets-finalizar button'>Finalizar</button>
    </div>
  );
}; 