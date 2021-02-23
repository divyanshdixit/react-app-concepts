import axios from 'axios';
import React, { Component } from 'react'

class HttpPostRequestAxios extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userid:'',
             title:'',
             body:''
        }

        this.postUri = 'https://jsonplaceholder.typicode.com/post';
    }
    
    changeValue = (e) => {
        const {name, value} = e.target;
        this.setState( (prev) => {
            return {
                ...prev,
                [name]:value
            }
        })

        // this.setState({
        //     [name] : [value]
        // })
    }

    submitHandler = (e) => {
        e.preventDefault();
        axios.post(this.postUri, this.state) // (url, {this.state}), return promise
            .then( (res) => {
                console.log(res)
            })
            .catch( (err) => {
                console.log(err)
            })
    }

    render() {
        const {title, body, userid} = this.state;
        return (
            <div>
                <h2> Post the form data using axios post method </h2>
                <form onSubmit={this.submitHandler}>
                    <input type="text" placeholder="Enter title" name="title" value={title} onChange={this.changeValue}/>
                    <input type="text" placeholder="Enter body" name="body" value={body} onChange={this.changeValue}/>
                    <input type="text" placeholder="Enter userId" name="userid" value={userid} onChange={this.changeValue}/>
                    <button type="submit"> Submit </button>
                </form>
            </div>
        )
    }
}

export default HttpPostRequestAxios
