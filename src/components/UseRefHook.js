import React, {useRef, useEffect} from 'react'

const UseRefHook = () => {

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    }, [])
    return (
        <div>
            <input type="text" ref={inputRef}/>
        </div>
    )
}

export default UseRefHook
