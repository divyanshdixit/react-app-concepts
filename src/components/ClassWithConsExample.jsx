import React, { Component } from 'react';

class ExampleClassWithCons extends Component{
    constructor(props){
         super(props);
         this.state = {
             name:"Divyansh",
             count:0,
             designation:"Team Lead",
             exampleprop:this.props.title
         }
    }

    changeMessage(){
        // setState() => fun have two arguments 1st is object & 2nd is callback function
        //  setState() => fun works asynchronously 
        // setState() => fun have callback function which have prevState as params

        // this.setState({
        //     name:'Abhishek'
        // })

        // this.setState( {
        //     name:"Abhishek"
        // }, () => {
        //     console.log('new state is ' + this.state.name)
        // })

        this.setState( (prevState, propsObj) => {
            var newCount = prevState.count + 1
            return {
            name: 'Name' + newCount ,
            count: newCount
        }}, () => {console.log('New state value is ' + this.state.name)} )

        console.log(this.state.name); // working synchronus
    }

    render(){
        return(
            <>
                <h1> Hello, {this.state.name} Your designation is {this.state.designation}.</h1>
                <p> This is the {this.state.exampleprop}</p>
                <p> Count : {this.state.count }</p>
                <button type="button" onClick={ () => this.changeMessage() }> Change Name </button>
            </>
        );
    }
}

export default ExampleClassWithCons;