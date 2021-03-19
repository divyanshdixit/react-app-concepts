import { computeHeadingLevel } from '@testing-library/react';
import React from 'react'
import {Link, useParams} from 'react-router-dom';
import UserView from './UserView';

const UsersLists = () => {
    let UserIds = [1, 2, 3, 4, 5];  
    let names = ['divyansh'];
    let usernames = ['dixit'] ;

    // if(id){
    //     return <UserView/>
    // }else{
        
        return (
            <div>
            <ul>
                {
                    UserIds.map( (user) => { 
                        {/* return <li> <Link to={`/users/${user}/${names}/${usernames}`}> {`User${user}`} </Link> </li> */}
                        return <li> <Link to={`/users/${user}`}> {`User${user}`} </Link> </li>

                    })
                }
            </ul>
            <UserView/>

            </div>
        )
    // }
}

export default UsersLists;