import React from 'react'

const CallbackHookCount = ({text, count}) => {
    console.log(`count- ${text} ${count}`)
    return (
        <div>
            Property is - {text} and value is - {count}
        </div>
    )
}

export default React.memo(CallbackHookCount)
// export default CallbackHookCount
