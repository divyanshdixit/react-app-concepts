import React, { Component } from 'react'
import updatedComponent from './HocPattern'

class HocHoverCounter extends Component {

    render() {
        const {count, incrementFunction} = this.props;
        return (
            <div>
                <h1 onMouseOver={incrementFunction}> Hover Counts {count}</h1>
            </div>
        )
    }
}

export default updatedComponent(HocHoverCounter)
