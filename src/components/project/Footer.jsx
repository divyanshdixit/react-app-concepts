import React, {useState} from 'react'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    
    return (
        <div>
            <p className="text-center"> CopyRight &copy; {year}</p>
        </div>
    )
}

export default Footer
