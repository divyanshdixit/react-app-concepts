import React, {useReducer} from 'react'

const init = {
    firstCounter:0,
    secondCounter:10
}

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
        case 'increment2':
            return {
                ...state,
                secondCounter: state.secondCounter + action.value
            }
        case 'decrement2':
            return {
                ...state,
                secondCounter: state.secondCounter - action.value
            }
        case 'reset':
            return init;
        default:
            return state;
    }
}

const ReducerHookWithComplex = () => {

    const [count, dispatch] = useReducer(reducer, init);

    return (
        <div>
            <h1> Complex first count - {count.firstCounter}</h1>
            <h1> Complex second count - {count.secondCounter}</h1>

            <button type="button" onClick={ () => dispatch({type:'increment', value:1})}> Increment</button>
            <button type="button" onClick={ () => dispatch({type:'decrement', value:1})}> Decrement</button>

            <button type="button" onClick={ () => dispatch({type:'increment', value:2})}> Increment By Two</button>
            <button type="button" onClick={ () => dispatch({type:'decrement', value:2})}> Decrement By Two</button>

            <button type="button" onClick={ () => dispatch({type:'increment2', value:1})}> Increment Counter 2</button>
            <button type="button" onClick={ () => dispatch({type:'decrement2', value:1})}> Decrement Counter 2</button>

            <button type="button" onClick={() => dispatch({type:'reset'})}> Reset</button>
        </div>
    )
}

export default ReducerHookWithComplex
