import React, {useContext} from 'react'
import {counterContext} from './ReducerHookWithContext';

const ReducerComponentA = () => {

    const countContext = useContext(counterContext)

    return (
        <div>
            Reducer component A

            <button onClick={() => countContext[1]({type:'increment', value:1})}>Increment</button>
            <button onClick={() => countContext[1]({type:'decrement', value:1})}>Decrement</button>
            <button onClick={() => countContext[1]({type:'reset'})}>Reset</button>

        </div>
    )
}

export default ReducerComponentA
