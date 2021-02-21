import React, {useState, useEffect} from 'react'

const UseEffectHook = () => {
    const [count, setcount] = useState(0)
    const [buttonCount, setbuttonCount] = useState(0)

    // run useEffect function after render function 
    useEffect(() => {
        document.title = `Now my title is ${count}`
    }, [count]) // if pass empty then it'll run for once in starting after render method , as we pass state variable it'll render for them.
    
    const clickCount = () => {
        setcount(count+1);
    }

    const clickCount2 = () => {
        setbuttonCount(buttonCount+1);
    }

    const changeTitle = () => {
        setcount(count+1);
    }

    return (
        <div>
            <h1> Click count : {count}</h1>
            <button onClick={clickCount}> Click me </button>
            <button onClick={clickCount2}> Click me {buttonCount} </button>

            <button onClick={changeTitle}> Change title </button>
        </div>
    )
}

export default UseEffectHook;
