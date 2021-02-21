import React, { Component, createContext } from 'react'
import { Consumer } from '../App'
import ContextCompoB from './ContextCompoB'

const NameContext = createContext();

class ContextCompoA extends Component {
    
    render() {
        return (
            <div>
                {/* we have to pass function as a child in consumer */}
                <Consumer>
                    {
                        (userName) => {
                            return(
                                <>
                                <h3> Hello from Component A Context value - {userName}</h3>
                                <NameContext.Provider value="Divyansh Dixit">
                                    <ContextCompoB/>
                                </NameContext.Provider>
                                </>
                            )
                        }
                    }
                    
                </Consumer>
            </div>
        )
    }
}

export default ContextCompoA
export {NameContext};
