import React from 'react'

// if we want to use ref forwarding we have to use functional compo using arrow function 
// use React.forwardRef() method for forwarding ref from parent to child
// this method take whole component as a parameter
// as we use props as parameter in functional component now we use 2 params (props, ref)

const RefForwardingChild = React.forwardRef((props, refs) => {
    return (
        <div>
            {/* passing refs params in ref attribute */}
            {/* refs parameter points to ref attirbute value of parent component */}
            <input type="text" ref={refs}/>
        </div>
    )
})

export default RefForwardingChild
