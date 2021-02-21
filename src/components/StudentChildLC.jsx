import React, { Component } from 'react'

class StudentChildLC extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            //  now get the prop and use it as state of child component
            roll : this.props.roll,
            name: this.props.name
        }
    }

    // After button click when parent props change then it'll not directly change the state of child but we can get it using static method
    static getDerivedStateFromProps(props, state){
        console.log(props, state);
        // check if props and state are same if they are not same then update child state
        if(props !== state){
            return {...props}
        }
        return null;
    }

    // 2nd this method will return true if we want to re-render component when props/state change else return false
    // by default it return true; 
    // we can return false to prevent it's by defualt method
    // used also for performance optimization
    shouldComponentUpdate(nextProps, nextState){
        console.log(nextProps,nextState);
        // if(nextProps.roll === nextState.roll){
        //     console.log('equal')
        //     return false;
        // }
        return true;
    }

    // call right before the changes from virtual dom are to be reflected in the dom.
    // use for capture some inforramtion from the dom 
    // this function will return some value or null and that value used as 3rd parameter in componentDidUpdate()
    // run before update
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log(prevProps, prevState);
        console.log('Run before update')
        return null;
    }
    
    // this method call only if shouldComponentUpdate return true.
    // called after render is finished in re-render cycle
    // run after update
    componentDidUpdate(prevProps, prevState, value){
        console.log(prevProps, prevState, value)
        console.log('Run after update')
    }

    // 3rd
    render() {
        console.log('child render method')
        return (
            <div>
                <h2> Student Child Component  {this.state.roll}</h2>
            </div>
        )
    }
}

export default StudentChildLC
