import React, { Component } from 'react'
import MemoComponent from './MemoComponent';
import PureComponent from './PureComponent';
import RegularComponent from './RegularComponent';

class CompareRegualrToPureCompo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name :'Divyansh'
        }
    }

    componentDidMount(){
        setTimeout( () => {
            this.setState({
                name:'Divyansh'
            })
        }, 2000);
    }

    render() {
        console.log('parent render method')
        return (
            <div>
                Parent component for getting the difference b/w regular and pure component
                {/* using memo for functional compoent  */}
                <MemoComponent name={this.state.name}/>
                {/* using pure compoent for class component */}
                <RegularComponent name={this.state.name}/>
                <button onClick={this.changeState}> Change State </button>
                <PureComponent/>

            </div>
        )
    }
}

export default CompareRegualrToPureCompo
