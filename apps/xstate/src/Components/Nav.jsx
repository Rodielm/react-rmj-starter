import React from 'react';

export const Nav = ({ state, send }) => {

    const goToWelcome = () => {
        send('CANCEL');
    }

    return (
        <>
            <div className='is-flex has-items-center has-justify-between'>
                <div className='title is-2 has-mb-1'>Book a fly ✈</div>
                {!state.matches('initial') && !state.matches('tickets') &&
                    <button onClick={goToWelcome} className='button is-danger has-pt-1 has-pb-1 has-pl-3 has-pr-3'>Cancel</button>
                }
            </div>
            <div className='divider'></div>
        </>
    );
}; 