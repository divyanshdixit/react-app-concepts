import React, {useState} from 'react';
import {useHistory, useLocation, useParams} from 'react-router-dom';

const UserView = () => {
    const {id} = useParams();
    // console.log(id, name);
    const location = useLocation();
    console.log(location);
    const history = useHistory();
    console.log(history);

    const clickHandler = () => {
        console.log(location)
        alert(`Current url is ${location.pathname}`)
    } 
    return (
        <>
            <h1> Hello User - {id}</h1>
            <h2> Path location is {location.pathname}</h2>

            {
                (location.pathname == `/users/${id}`) ? 
                    <> 
                        <button onClick={clickHandler}> Click Me </button>
                        <button onClick={() => history.goBack()}> Back </button>
                        <button onClick={() => history.goForward()}> Forward </button>
                    </>
                : null 
            }
        </>
    )
}

export default UserView;