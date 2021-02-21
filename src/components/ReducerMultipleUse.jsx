import React, {useReducer} from 'react'

const init = {
    firstCounter:0,
    secondCounter:10
}

// here first and second counter is doing same transition so here we can use multiple useReducer() hook
const reducer = (state, action) => {
    switch(action.type){
        case 'increment':
            return {
                ...state,
                firstCounter: state.firstCounter + action.value
            }
        case 'decrement':
            return {
                ...state,
                firstCounter: state.firstCounter - action.value
            }
        case 'reset':
            return init;
        default:
            return state;
    }
}

const ReducerMultipleUse = () => {
    
    // for first counter:
    const [count, dispatch] = useReducer(reducer, init)

    // for second counter:
    const [count2, dispatch2] = useReducer(reducer, init)

    return (
        <div>
            <h1> First counter - {count.firstCounter} </h1>

            <button type="button" onClick={ () => dispatch({type:'increment', value:1})}> Increment</button>
            <button type="button" onClick={ () => dispatch({type:'decrement', value:1})}> Decrement</button>

            <h1> Second counter - {count2.firstCounter} </h1>

            <button type="button" onClick={ () => dispatch2({type:'increment', value:2})}> Increment Counter 2</button>
            <button type="button" onClick={ () => dispatch2({type:'decrement', value:2})}> Decrement Counter 2</button>

            <button type="button" onClick={() => dispatch({type:'reset'})}> Reset</button>

        </div>
    )
}

export default ReducerMultipleUse
