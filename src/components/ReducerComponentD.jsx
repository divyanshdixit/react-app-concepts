import React, {useContext} from 'react'
import {counterContext} from './ReducerHookWithContext';

const ReducerComponentD = () => {
    const countContext = useContext(counterContext);
    // array destructing
    const [count, dispatch] = countContext;

    return (
        <div>
            Reducer component D

            <button onClick={() => dispatch({type:'increment', value:2})}>Increment</button>
            <button onClick={() => dispatch({type:'decrement', value:2})}>Decrement</button>
            <button onClick={() => dispatch({type:'reset'})}>Reset</button>
        </div>
    )
}

export default ReducerComponentD
