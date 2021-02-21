import React, { Component } from 'react'

class RegularComponent extends Component {
    constructor(props) { // component create 
        super(props)
    
        this.state = {
            name: this.props.name // divyansh2
        }

        console.log(this.props);
    }

    static getDerivedStateFromProps(props, state){
        console.log(props, state);
        return {...props}
    }
    
    render() {
        console.log('Regular compoent render');
        return (
            <div>
                Regular Class Component {this.state.name}
            </div>
        )
    }
}

export default RegularComponent
