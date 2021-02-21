import React, {useContext} from 'react'
import {counterContext} from './ReducerHookWithContext';

const ReducerComponentF = () => {
    const countContext = useContext(counterContext);

    return (
        <div>
            reducer component F

            <button onClick={() => countContext[1]({type:'increment', value:3})}>Increment</button>
            <button onClick={() => countContext[1]({type:'decrement', value:3})}>Decrement</button>
            <button onClick={() => countContext[1]({type:'reset'})}>Reset</button>
            
        </div>
    )
}

export default ReducerComponentF
