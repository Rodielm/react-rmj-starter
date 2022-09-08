import React from 'react';
// import './Nav.css';

export const Nav = ({ state, send }) => {

    const goToWelcome = () => {
        send('CANCEL');
    }

    return (
        <>
            <div className='is-flex has-direction-row has-justify-around'>
                <div className='title is-2'>Book a fly ✈</div>
                {!state.matches('initial') && !state.matches('tickets') &&
                    <button onClick={goToWelcome} className='button is-danger'>Cancel</button>
                }
            </div>
            <div className='divider'></div>
        </>
    );
}; 