import React from 'react';

var styleObj = {
    color: "blue",
    textTransform: "uppercase"
  }

function Heading(){
    return (
        <>
            <h1 style = {styleObj}> Listing {5} series of prime video </h1>
        </>
    )
}

export default  Heading;