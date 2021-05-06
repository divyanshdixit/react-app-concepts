import React, {useRef, useEffect} from 'react'

// get the dom nodes directly in component: 
// ref can also be used to store any mutable value:

const UseRefHook = () => {

    const inputRef = useRef(null);
    const paraRef = useRef();
    const thirdRef= useRef();

    useEffect(() => {
        thirdRef.current = '100';
        console.log(paraRef.current);
        console.log(thirdRef.current);
        inputRef.current.focus()
    }, [])

    return (
        <div>
        <button type="button">button </button>
        <p ref={paraRef}> this is para </p>
        <input type="text" ref={inputRef} newProp ={thirdRef.current}/>
        </div>
    )
}

export default UseRefHook
