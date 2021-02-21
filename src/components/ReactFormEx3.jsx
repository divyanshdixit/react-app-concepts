import React, { useState } from 'react';

const ReactFormEx3 = () => {
    var stateObj = {
        fname:'',
        lname:'',
        email:''
    }
    const [user, updateUser] = useState({
        fname:'',
        lname:'',
        email:''
    }) // useState() hook can take object as argument.

    const [state, setstate] = useState({
        name:'',
        email:''
    })

    function changeEvent(event) {
        
        updateUser( (prevValue) => {
            if(event.target.name == 'fname'){
                return {
                    fname:event.target.value,
                    lname:prevValue.lname,
                    email:prevValue.email
                }
            }else if(event.target.name == 'lname'){
                return {
                    fname:prevValue.fname,
                    lname:event.target.value,
                    email:prevValue.email
                }
            }else{
                return {
                    fname:prevValue.fname,
                    lname:prevValue.lname,
                    email:event.target.value
                }
            }
        } ) // updateUser function can take callback function 
    }

    function submitHandler(event) {
        event.preventDefault();
        setstate( () => {
            return {
                name: `${user.fname} ${user.lname}`,
                email: user.email
            }
        })
    }
    return(
        <>
        <h1> Hello {user.fname} {user.lname} {user.email}</h1>
        <h2> Get the value after submission Name- {state.name}, Email- {state.email}  </h2>
            <form onSubmit={submitHandler}>
                <input type="text" name="fname" placeholder="Enter your first name" onChange={changeEvent} value={user.fname}/> 
                <input type="text" name="lname" placeholder="Enter your last name" onChange={changeEvent} value={user.lname}/>
                <input type="text" name="email" placeholder="Enter your email" onChange={changeEvent} value={user.email}/>
                <button type="submit"> Submit </button> 
            </form>
        </>
    )
}

export default ReactFormEx3;