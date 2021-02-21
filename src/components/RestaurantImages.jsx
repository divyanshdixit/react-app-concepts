import React from 'react';

function RestaurantImages(props){
    return(
        <img src={props.imagesrc}  type={props.xyz} alt={props.name}/>
    )
}

export default RestaurantImages;