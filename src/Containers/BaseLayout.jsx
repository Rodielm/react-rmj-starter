import React from 'react';
import { useMachine } from '@xstate/react';
import { Nav } from '../Components/Nav';
import { StepsLayout } from './StepsLayout';
import bookingMecha from '../Mecha/bookingMecha';
// import './BaseLayout.css';

export const BaseLayout = () => {
    const [state, send] = useMachine(bookingMecha);

    // Verify the current state is our machine.
    console.log('Our machine', state.value, state.context);

    return (
        <div className='card has-ml-auto has-mr-auto has-w-96 is-shadowed has-text-center'>
            <Nav state={state} send={send} />
            <StepsLayout state={state} send={send} />
        </div>
    );
}