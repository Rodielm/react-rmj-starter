import React, { useState } from 'react';

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
        <form onSubmit={submit}>
            <p className='passengers-title title'>Agrega a las personas que van a volar ✈️</p>
            {passengers.map((person, idx) =>
                <p className='text' key={`person-${idx}`}>{person}</p>
            )}
            <input
                id="name"
                name="name"
                type="text"
                className='input'
                placeholder='Escribe el nombre completo'
                required
                value={value}
                onChange={onChangeInput}
            />
            <div className='is-flex has-justify-between has-pt-2'>
                <button
                    className='button is-primary has-pt-1 has-pb-1 has-pl-3 has-pr-3'
                    type="submit"
                >
                    Agregar Pasajero
                </button>
                <button
                    className='button is-primary has-pt-1 has-pb-1 has-pl-3 has-pr-3'
                    type="button"
                    onClick={goToTicket}
                >
                    Ver mi ticket
                </button>
            </div>
        </form>
    );
};