import React, { Component } from 'react'
import axios from 'axios';
import GetCurrentTime from './GetCurrentTimeUseStateHook';

class HttpRequestAxios extends Component {
    constructor(props) {
        super(props)
    
        this.getUri = 'https://jsonplaceholder.typicode.com/posts';

        // initialise the state with empty object or array and when get the response from api then change the state accordingly 
        this.state = {
            data: []
        }
    }
    
    // all http request will go here after the component will mounted
    componentDidMount(){ // get, post, put, patch, delete ,create, head

        axios.get(this.getUri) // return promise
            .then( (response) => {
                console.log(response) // response is object 
                this.setState( {
                    data: response.data
                })
            })
            .catch( (error) => {
                console.log(error);
            })
    }
    render() {
        return (
            <div>
                <h1> Get the data from api call using axios</h1>
                
                <ul>
                 {
                     this.state.data.map( (val) => {
                        return <li> {val.title} </li>
                     })
                 }
                 </ul>
            </div>
        )
    }
}

export default HttpRequestAxios
