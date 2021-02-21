import React, { Component } from 'react'
import RefForwardingChild from './RefForwardingChild';

class RefForwardingParent extends Component {

    constructor(props) {
        super(props)
    
        this.parentRef = React.createRef();
    }
    
    clickHandler = () => {
        // here current referes direclty to the refered dom element not the whole class instance
        this.parentRef.current.focus();
    }

    render() {
        return (
            <div>
                <RefForwardingChild ref={this.parentRef}/>
                <button onClick={this.clickHandler}> Forwarding Ref </button>  
            </div>
        )
    }
}

export default RefForwardingParent
