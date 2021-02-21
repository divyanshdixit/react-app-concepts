import {useState} from 'react'

const useCustomHookCounter = (init = 0, value) => {

    const [count, setcount] = useState(init)

    const increment = () => {
        setcount(count+value);
    }

    const decrement = () => {
        setcount(count-value);
    }

    const reset = () => {
        setcount(init);
    }

    // retrun array of values
    return [count, increment, decrement, reset];

    // return (
    //     <div>
    //         <h1> Count - {count}</h1>
    //         <button onClick={increment}> Increment</button>
    //         <button onClick={decrement}> Decrement</button>
    //         <button onClick={reset}> Reset </button>
    //     </div>
    // )
}

export default useCustomHookCounter
