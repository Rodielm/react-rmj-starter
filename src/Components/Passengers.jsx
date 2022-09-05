import React, { useState } from 'react';
import './Passengers.css';

export const Passengers = ({ state, send }) => {
    const [value, changeValue] = useState('');

    const onChangeInput = (e) => {
        changeValue(e.target.value);
    }

    const goToTicket = () => {
        send('DONE');
    }

    const submit = (e) => {
        e.preventDefault();
        // state, context
        send('ADD', { newPassenger: value })
        changeValue('');
    }

    const { passengers } = state.context;

    return (
        <form onSubmit={submit} className='passengers'>
            <p className='passengers-title title'>Agrega a las personas que van a volar ✈️</p>
            {passengers.map((person, idx) =>
                <p className='text' key={`person-${idx}`}>{person}</p>
            )}
            <input
                id="name"
                name="name"
                type="text"
                placeholder='Escribe el nombre completo'
                required
                value={value}
                onChange={onChangeInput}
            />
            <div className='passengers-buttons'>
                <button
                    className='passengers-add button-secondary'
                    type="submit"
                >
                    Agregar Pasajero
                </button>
                <button
                    className='Passenger-pay button'
                    type="button"
                    onClick={goToTicket}
                >
                    Ver mi ticket
                </button>
            </div>
        </form>
    );
};