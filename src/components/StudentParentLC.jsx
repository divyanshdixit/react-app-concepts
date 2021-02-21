import React, { Component } from 'react'
import StudentChildLC from './StudentChildLC'

class StudentParentLC extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Divyansh',
            roll : 59
        }
    }
    
    clickHandle = () => {
        this.setState({
            name: 'Divyansh Dixit',
            roll:60
        })
    }

    render() {
        console.log('parent render method')
        return (
            <div>
                {/* PASS STATE AS A PROP */}
                <h1> Student Parent Component {this.state.name} {this.state.roll}</h1>
                <StudentChildLC roll={this.state.roll} name={this.state.name}/>
                <button onClick={this.clickHandle}> Change Roll </button>
            </div>
        )
    }
}

export default StudentParentLC
