import React, { Component } from 'react'
import RefsForChild from './RefsForChild';

class RefsPassFromParent extends Component {

    constructor(props) {
        super(props)
    
        this.parentRef = React.createRef();
        this.parentInputRef = React.createRef();

    }
    
    clickHandler = () => {
        console.log(this.parentRef.current);
        this.parentRef.current.focusChildInput();
    }

    render() {
        return (
            <div>
                <h1> Parent component </h1>
                {/* here ref will hold whole class component */}
                <RefsForChild ref={this.parentRef}/>
                <button onClick={this.clickHandler}> Focus on child input </button>

                <input type="text" ref={this.parentInputRef}/>
                
            </div>
        )
    }
}

export default RefsPassFromParent
