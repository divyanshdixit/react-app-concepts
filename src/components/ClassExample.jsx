import React, { Component } from 'react';

class ExampleClass extends Component{
    // States- Here it is a class property
    state ={
        name:"Divyansh",
        title:"Software Developer",
        propexample:this.props.title
    }
    render(){
        return (
            <>
                <h1> Hello, I'm  class component, my name is {this.state.name}</h1>
                <p> This is the {this.state.propexample}</p>
            </>
        )
    }
}

export default ExampleClass;
