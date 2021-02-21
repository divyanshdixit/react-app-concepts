import React from 'react'

const CallbackHookButton = ({handleClick, children}) => {
    console.log(`button- ${children}`)
    return (
        <div>
            <button onClick={handleClick}> {children} </button>
        </div>
    )
}

// we use React.memo() [a higher order component] to prevent from being re-rendered again n again.(when props/state will not change)
export default React.memo(CallbackHookButton);

// export default CallbackHookButton
