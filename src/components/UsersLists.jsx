import { computeHeadingLevel } from '@testing-library/react';
import React from 'react'
import {Link, useParams} from 'react-router-dom';
import UserView from './UserView';

const UsersLists = () => {
    let UserIds = [1, 2, 3, 4, 5];   
    const {id} = useParams();

    // if(id){
    //     return <UserView/>
    // }else{
        
        return (
            <div>
            <ul>
                {
                    UserIds.map( (user) => {
                        return <li> <Link to={`/users/${user}`}> {user} </Link> </li>
                    })
                }
            </ul>
            <UserView/>

            </div>
        )
    // }
}

export default UsersLists;