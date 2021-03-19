import React, {useState, useEffect} from 'react'

const UseEffectHook = () => {

    const [count, setcount] = useState(0)
    const [buttonCount, setbuttonCount] = useState(0)
    const [titleCount, setTitleCount] = useState(0)

    // run useEffect function after render function 
    // componentDidMount(), componentDidUpdate(), componentWillUnmount()
    useEffect(() => {
        console.log('object')
        document.title = `Now my title is ${count}`
        return () => {
            console.log('object2')
        }// cleanup function
    },[count]) // if pass empty then it'll run for once in starting after render method , as we pass state variable it'll render for only them.
    
    const clickCount = () => {
        setcount(count+1);
    }

    const clickCount2 = () => {
        setbuttonCount(buttonCount+1);
    }

    const changeTitle = () => {
        setTitleCount(titleCount+1);
    }

    return (
        <div>
            <h1> Use effect Click count : {count}</h1>
            <button onClick={clickCount}> Click me </button>
            <button onClick={clickCount2}> Click me {buttonCount} </button>

            <button onClick={changeTitle}> Change title </button>
        </div>
    )
}

export default UseEffectHook;
