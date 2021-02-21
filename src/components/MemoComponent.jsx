import React from 'react'

function MemoComponent({name}) { // destructuring the props
    console.log('memo render method')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComponent)
