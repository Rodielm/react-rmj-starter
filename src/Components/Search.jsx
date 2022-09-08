import React, { useState } from 'react';
// import './Search.css';

export const Search = ({ state, send }) => {
    const [flight, setFlight] = useState('');


    const goToPassengers = () => {
        send("CONTINUE", { selectedCountry: flight });
    }

    const handleSelectChange = (event) => {
        setFlight(event.target.value);
    };

    const options = state.context.countries;

    return (
        <>
            <label>Busca tu destino</label>
            <select id="country" className='select has-m-2' value={flight} onChange={handleSelectChange}>
                <option value="" disabled defaultValue>Escoge un país</option>
                {options.map((option) => <option value={option.name.common} key={option.name.common}>{option.name.common}</option>)}
            </select>
            <div className='is-flex has-justify-end'>
                <button onClick={goToPassengers} disabled={flight === ''} className='button is-primary'>Continuar</button>
            </div>
        </>
    );
}; 