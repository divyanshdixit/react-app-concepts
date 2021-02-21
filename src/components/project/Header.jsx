import React from 'react'
import logo from './Images/logo.png'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="Logo Image" width="70" height="50" /> 
            <h1> Keep note cloning </h1>
        </div>
    )
}

export default Header
