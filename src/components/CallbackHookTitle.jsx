import React from 'react'

const CallbackHookTitle = () => {
    console.log('title-')
    return (
        <div>
            usecallback hook title
        </div>
    )
}

export default React.memo(CallbackHookTitle)
// export default CallbackHookTitle
