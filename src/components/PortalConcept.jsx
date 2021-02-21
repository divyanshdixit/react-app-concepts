import React from 'react'
import ReactDom from 'react-dom';

// using the portal we need react dom and use ReactDom.createPortal()
const PortalConcept = () => {
    return ReactDom.createPortal( 
    <div>
        <h1> Portal Concept </h1>
    </div>, 
    document.getElementById('modal-root')
    )
}

export default PortalConcept
