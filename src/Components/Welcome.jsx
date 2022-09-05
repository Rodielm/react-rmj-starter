import React from 'react';


export const Welcome = ({ send }) => {
    const startBooking = () => {
        send('START')
    }

    return (
        <div className='welcome'>
            <p className='welcome-title title'>Welcome </p>
            <p className='welcome-description description'> Buy a flight</p>
            <button onClick={startBooking} className='button'>Start</button>
        </div>
    )
}