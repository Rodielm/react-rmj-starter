import React from 'react';
import { useMachine } from '@xstate/react';
import bookingMecha from '../Mecha/bookingMecha';

export const BaseLayout = () => {
    const [state, send] = useMachine(bookingMecha);
    console.log("Our machine", state);
    return (
        <div>Hola</div>
    );
}