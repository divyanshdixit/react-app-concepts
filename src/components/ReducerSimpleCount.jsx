import React, {useReducer} from 'react'

    const init = 0;

    const reducer = (state, action) => {
        switch(action){
            case 'increment':
                return state+1;
            case 'decrement':
                return state-1;
            case 'reset':
                return 0;
            default :
                return state
        }
    }
    
const ReducerSimpleCount = () => {

    const [state, dispatch] = useReducer(reducer, init)

    return (
        <div>
            <h1> Count is - {state} </h1>

            <button type="button" onClick={ () => dispatch('increment')}> Increment</button>
            <button type="button" onClick={ () => dispatch('decrement')}> Decrement</button>
            <button type="button" onClick={() => dispatch('reset')}> Reset</button>
        </div>
    )
}

export default ReducerSimpleCount
