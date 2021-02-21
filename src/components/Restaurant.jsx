import React from 'react';
import RestaurantImages from './RestaurantImages';

function Restaurant(props){
    return(
        <>
            <div className="menu-details">
                <h2> {props.name}  - <span> {props.category}</span> </h2>
                {/* make one component here inside restaurant component */}
                <RestaurantImages imagesrc={props.image} name={props.name}/>
                <p> <b> Amount- {props.price} Rs.</b> </p>
            </div>
        </>
    )
}

export default Restaurant; 