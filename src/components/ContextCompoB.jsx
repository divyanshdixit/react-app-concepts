import React, { Component, useContext } from 'react'
import { Consumer } from '../App'
import { NameContext } from './ContextCompoA'
import ContextCompoC from './ContextCompoC'

const ContextCompoB = () => {
        const fullName = useContext(NameContext)
        return (
            <div>
                Hello from component B using useContext hook for print the value passed in context {fullName}
            </div>
        )
}

export default ContextCompoB
