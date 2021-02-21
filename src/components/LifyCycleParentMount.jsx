import React, { Component } from 'react'
import LifeCycleChild from './LifeCycleChildMount';

// Mounting lifecycle method will run when instance of component is created and renderd
// Updating lifecycle method will run when state or props will change 
/*
static getDerivedStateFromProps
shouldComponentUpdate
render
getSnapshotBeforeUpdate
componentDidUpdate
*/

class LifyCycleParent extends Component {
    // first constructor method
    constructor(props) {
        super(props);

        // initial state 
        this.state = {
            name:'Divyansh'
        }

        console.log('Lifycycle parent constr')
    }

    changeState = () => {
        this.setState({
            name:'Changed Name'
        })
    }
    // second static methods, 1st update LC method
    static getDerivedStateFromProps(props, state){
        // return state object or null should be returned
        console.log('Lifycycle parent static method')
        return null;
    }
    
    // fourth method is componentDidMount
    componentDidMount(){
        console.log('lifycycle parent mount method')
        
    }

    // 2nd update LC method
    shouldComponentUpdate(){
        console.log('parent should method');
        return true;
    }

    // 4th method for update LC method => getSnapshotBeforeUpdate(prevProps, prevState)
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('parent update snapshot method');
        return null;
    }

    // 5th method for update LC method => componentDidUpdate
    componentDidUpdate(){
        console.log('parent update lc method')
    }
    // third method is render method
    render() {
        console.log('parent render method')
        return (
            <div>
                Lifycycle parent
                 {/* as one child component is used here so first parent method will run till render and 
                 as it gets child component it should run all 4 methods of the child compo and then
                 it'll run mount method of parent  */}
                <LifeCycleChild/>
                <button onClick={this.changeState}> Change State </button>
            </div>
        )
    }
}

export default LifyCycleParent
