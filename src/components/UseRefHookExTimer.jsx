import React, {useState, useRef, useEffect} from 'react'

const UseRefHookExTimer = () => {

    const [count, setcount] = useState(0)
    const inputRef = useRef();

    useEffect(() => {
        // set the current property of inputRef object 
        inputRef.current = setInterval(() => {
            setcount(count+1);
        } , 1000)
        return () => {
            clearInterval(inputRef.current)
        }
    }, [count])

    return (
        <div>
            count - {count}
            {/* the interval varaible is undefined here bcz it only scopeed in useEffect() function */}
            {/* <button onClick={() => clearInterval(inputRef.current)}> Stop counter </button> */}

            {/* that's why we have to use useRef() hook here so it can hold mutable value */}
            <button onClick={() => clearInterval(inputRef.current)}> Stop counter </button>
        </div>
    )
}

export default UseRefHookExTimer
