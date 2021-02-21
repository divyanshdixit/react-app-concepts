import React, { Component } from 'react'

class EventBinding extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            language:'js'
        }

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(){
        this.setState({ // this keyword is not defined here so we have to bind the event 
            language:'React'
        })
    }

    // otherHandler() => make handler as a class property 
    otherHandler =  () => {
        this.setState({
            language:'python'
        })
    }
    
    render() {
        return (
            <div>
                <h3> {this.state.language} </h3>
                {/* <button onClick={this.clickHandler}> Change language </button> */}

                {/* First way to bind the event is usign the bind() method and pass this keyword but this way re-render the component and having performance issue. */}
                {/* <button onClick={this.clickHandler.bind(this)}> Change language </button> */}

                {/* Second way is- use arrow function in render for directly call handler method, this also having same performance issue */}
                {/* <button onClick={ () => { this.clickHandler() }}> Change language </button> */}

                {/* Third way is- use bind method in constructor method */}
                <button onClick={ this.clickHandler }> Change language </button>

                {/* Fourth way is- call handler method as a class property */}
                <button onClick={ this.otherHandler }> Other Button </button>

            </div>
        )
    }
}

export default EventBinding