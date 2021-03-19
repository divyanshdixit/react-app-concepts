import React, {useState} from 'react';
import {useHistory, useLocation, useParams} from 'react-router-dom';

const UserView = () => {
    const {id, name, username} = useParams(); // to get the parameters in url
    console.log(id, name, username);
    const location = useLocation(); // returns location object that represents current url
    console.log(location);
    const history = useHistory(); // gives access to history instance that we can use to navigate 
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