import React from 'react';

function Restaurant(props){
    return(
        <>
            <div className="menu-details">
                <h2> {props.name}  - <span> {props.category}</span> </h2>
                <img src={props.image} alt={props.name}/>
                <p> <b> Amount- {props.price} Rs.</b> </p>
            </div>
        </>
    )
}

export default Restaurant; 