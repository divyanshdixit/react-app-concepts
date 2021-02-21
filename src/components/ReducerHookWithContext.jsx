import React, {useContext, useReducer, useState} from 'react'
import ReducerComponentA from './ReducerComponentA';
import ReducerComponentB from './ReducerComponentB';
import ReducerComponentC from './ReducerComponentC';

export const counterContext = React.createContext();

const ReducerHookWithContext = () => {

    // const [count, setcount] = useState(0);
    const init = 0;

    const reducer = (state, action) => {
        switch(action.type){
            case 'increment':
                return state + action.value;
            case 'decrement':
                return state - action.value;
            case 'reset':
                return init;
            default:
                return state;
        }
    }

    const [newState, dispatch] = useReducer(reducer, init);

    return (
        <div>
            <h1> Reducer hook with context hook - {newState} </h1>

            <counterContext.Provider value={[newState, dispatch]}>
                <ReducerComponentA />
                <ReducerComponentB />
                <ReducerComponentC />
            </counterContext.Provider>

            {/* <button onClick={() => dispatch({type:'increment'})}>Increment</button>
            <button onClick={() => dispatch({type:'decrement'})}>Decrement</button>
            <button onClick={() => dispatch({type:'reset'})}>Reset</button> */}
        </div>
    )
}

export default ReducerHookWithContext
