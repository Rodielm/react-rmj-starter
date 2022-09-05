import React from 'react';
import './Nav.css';

export const Nav = ({ state, send }) => {

    const goToWelcome = () => {
        send('CANCEL');
    }

    return (
        <nav className='Nav'>
            <h1 className='Nav-logo'>Book a fly ✈</h1>
            {!state.matches('initial') && !state.matches('tickets') &&
                <button onClick={goToWelcome} className='button is-secondary'>Cancel</button>
            }
        </nav>
    );
}; 