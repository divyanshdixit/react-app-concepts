import React, { Component } from 'react'
import { Consumer } from '../App'

export default class ContextCompoC extends Component {
    render() {
        return (
            
            <div>
                <Consumer>
                    {
                        (userName) => {
                            return (
                                <>
                                <h1> We'll use context api to read props from App (Parent) Component to 3 level deeply nested Component C</h1>
                                <h5> Hello from component C context value - {userName} </h5>
                                <p> Component C </p>
                                <br/>
                                </>
                            )
                        }
                    }
                    
                </Consumer>
            </div>
        )
    }
}
