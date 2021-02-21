import React, { Component } from 'react'

class LifeCycleChild extends Component {
    // first is constru
    constructor(props) {
        super(props)
    
        this.state = {
             childName : 'Child'
        }

        console.log('Child const method')
    }
    
    // second is static method
    static getDerivedStateFromProps(props, state){
        // it should return updated state object or null
        console.log('child static method')
        return null;
    }

    // foruth method is mount
    componentDidMount(){
        console.log('child mount method');
    }

    // 2nd update LC method
    shouldComponentUpdate(){
        console.log('child should method');
        return true;
    }

    // 4th method for update LC method => getSnapshotBeforeUpdate(prevProps, prevState)
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Child update snapshot method');
        return null;
    }

    // 5th method for update LC method => componentDidUpdate
    componentDidUpdate(){
        console.log('Child update lc method')
    }

    // third method is render 
    render() {
        console.log('Child render method')
        return (
            <div>
                LifeCycleChild
            </div>
        )
    }
}

export default LifeCycleChild
