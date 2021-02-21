import axios from 'axios'
import React, { useEffect, useReducer } from 'react'

const ReducerHookFetchingTwo = () => {

    // 1st step
    const initialState = {
        loading: true,
        error:'',
        post: {}
    }

    // 2nd step
    const reducer = (state, action) => { // return updated state 
        switch(action.type){
            case 'FETCH_SUCCESS' :
                return {
                    loading:false,
                    error: '',
                    post: action.payload
                }
            case 'FETCH_ERROR' :
                return {
                    loading:false,
                    error:action.payload,
                    post:''
                }
            default:
                return state; // currentState
        }
    }

    // 3rd step: using useReducer() => updatedState:
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then( (res) => {
                console.log(res)
                dispatch({type:'FETCH_SUCCESS', payload:res.data})
            })
            .catch( (err) => {
                console.log(err)
                dispatch({type:'FETCH_ERROR', payload:err.message})
            })
    }, []);

    return (
        <div>
            {state.loading ? 'Loading...' : state.post.title}

            {state.error && state.error }
        </div>
    )
}

export default ReducerHookFetchingTwo
