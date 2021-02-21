import React from 'react';

const FunctionalCompoWithProps = (props) => {
    return(
        <>
            <h1> Hello {props.name}</h1>
            {props.children}
        </>
    )
}

export default FunctionalCompoWithProps;