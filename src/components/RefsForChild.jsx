import React, { Component } from 'react'
import RefsPassFromParent from './RefsPassFromParenttoChild';

class RefsForChild extends Component {
    constructor(props) {
        super(props)
        
        this.childInputRef = React.createRef();
    }
    
    focusChildInput(){
        this.childInputRef.current.focus();
    }

    render() {
        return (
            <div>
                <h1> Child Component </h1>
                <input type="text" ref={this.childInputRef}/>
                {/* we can't do vice versa at the same time */}
            </div>
        )
    }
}

export default RefsForChild
