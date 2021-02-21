import React, { useState } from 'react';

const Forms4 = () => {
    var detailObj = {
        name:'',
        email:'',
        designation:''
    }

    const [user, setuser] = useState({
        name:'',
        email:'',
        designation:''
    })

    const [detail, setdetail] = useState({
        name:'',
        email:'',
        designation:''
    });


    function changeEvent(event) {
        // var value = event.target.value
        // var name = event.target.name 

        const {name, value } = event.target;

        setuser( (prevValue) => {
            return{
                ...prevValue,
                [name] : value
            }
        })
    }

    return(
        <>
            <h1> Submitted values are {detail.name} {detail.email} {detail.designation} </h1>
            <h1> Your inputs are {user.name} {user.email} {user.designation}</h1>
            <form>
                <input type="text" name='name' value={user.name} placeholder="Enter your name" onChange={changeEvent}/>
                <input type="text" name='email' value={user.email} placeholder="Enter your email" onChange={changeEvent}/>
                <input type="text" name='designation' value={user.designation} placeholder="Enter your designation" onChange={changeEvent}/>
                <button type="submit"> Submit Form</button>
            </form>
        </>
    )
}

export default Forms4