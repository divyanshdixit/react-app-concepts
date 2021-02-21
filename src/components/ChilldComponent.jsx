import React from 'react'

function ChilldComponent(props) {
    return (
        <div>
            <button onClick={props.callParent}> Call parent </button>

            {/* passing parameters in parent method using arrow function */}
            <button onClick={() => props.callParentWithParams('Calling parent method with params from child compo')}> Call parent with parameters from child </button>
        </div>
    )
}

export default ChilldComponent
