import React, {useState} from 'react'
import useCustomHookCounter from './CustomHookCounter'

const CustomHookCounterUsage1 = () => {

    // const [count, setcount] = useState(0)

    // const increment = () => {
    //     setcount(count+1);
    // }

    // const decrement = () => {
    //     setcount(count-1);
    // }

    // const reset = () => {
    //     setcount(0);
    // }

    const [count, increment, decrement, reset] = useCustomHookCounter(0, 2)
    
    return (
        <div>
            <h1> Count - {count}</h1>
            <button onClick={increment}> Increment</button>
            <button onClick={decrement}> Decrement</button>
            <button onClick={reset}> Reset </button>
        </div>
    )
}

export default CustomHookCounterUsage1
