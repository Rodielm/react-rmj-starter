import React from 'react';


export const Welcome = ({ send }) => {
    const startBooking = () => {
        send('START')
    }

    return (
        <div className='welcome'>
            <p className='welcome-title title'>Welcome </p>
            <p className='welcome-description description'> Buy a flight</p>
            <button onClick={startBooking} className='button has-pt-1 has-pb-1 has-pl-3 has-pr-3'>Start</button>
        </div>
    )
}