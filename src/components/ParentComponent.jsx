import React, { Component } from 'react'
import ChilldComponent from './ChilldComponent';

class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name : 'I\'m parent'
        }

        this.CallParent = this.CallParent.bind(this);
    }

    CallParent(){
        // as we are using this keyword in function so we have to bind first in const.
        
        this.setState( {
            name:'Parent component is called now'
        }, () => {
            alert(`Hey ${this.state.name}`)
        })
    }

    ParentMethodWithParamsFromChild(childParams){
        alert(`Hey ${childParams}`)
    }
    
    render() {
        return (
            <div>
                <ChilldComponent callParent={this.CallParent} callParentWithParams= {this.ParentMethodWithParamsFromChild}/>
            </div>
        )
    }
}

export default ParentComponent
