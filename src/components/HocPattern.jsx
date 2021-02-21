// as it has function in which we'll pass original component and it'll return newComponent so it'll be a functional compo

// share the common functionality b/w components

// wrapped component => comp passed as argument

import React from 'react'

const updatedComponent = (OriginalComponent) => {
    
    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }
        
        incrementCounter = () => {
            this.setState( (prev) => {
                return{
                    count: prev.count + 1
                }
            })    
        }
    
        render(){
            return <OriginalComponent count={this.state.count} incrementFunction={this.incrementCounter} {...this.props}/>
        }
    }

    return NewComponent
}

export default updatedComponent
