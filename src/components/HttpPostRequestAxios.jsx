import axios from 'axios';
import React, { Component } from 'react'

class HttpPostRequestAxios extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             password: ''
        }

        this.postUri = 'https://jsonplaceholder.typicode.com/posts';
    }
    
    changeValue = (e) => {
        const {name, value} = e.target;
        // this.setState( (prev) => {
        //     return {
        //         ...prev,
        //         [name]:value
        //     }
        // })

        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        axios.post(this.postUri, this.state) // (url, {this.state})
            .then( (res) => {
                console.log(res)
            })
            .catch( (err) => {
                console.log(err)
            })
    }

    render() {
        const {username, body, userid} = this.state;
        return (
            <div>
                <h2> Post the form data using axios post method </h2>
                <form onSubmit={this.submitHandler}>
                    <input type="text" placeholder="Enter title" name="username" value={this.state.username} onChange={this.changeValue}/>
                    <input type="text" placeholder="Enter body" name="password" value={body} onChange={this.changeValue}/>
                    {/* <input type="text" placeholder="Enter userId" name="userid" value={userid} onChange={this.changeValue}/> */}
                    <button type="submit"> Submit </button>
                </form>
            </div>
        )
    }
}

export default HttpPostRequestAxios
