import React, { useState } from 'react';

const Forms = () => {
    const [fname, updateFname] = useState('');
    const [lname, updateLname] = useState('');

    const [submitFname, setFname] = useState('')
    const [submitLname, setLname] = useState('')

    function submitHandler(event) {
        event.preventDefault();
        setFname(fname);
        setLname(lname);
    }

    function FnameEvent(event) {
        updateFname(event.target.value);
    }

    function LnameEvent(event) {
        updateLname(event.target.value);
    }
    return(
        <>
            <h1> Get the submitted value here {submitFname} {submitLname} </h1>
            <h1> Print submitted value here {fname} {lname} </h1>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Enter firstname" value={fname} onChange={FnameEvent}/>
                <input type="text" placeholder="Enter lastname" value={lname} onChange={LnameEvent}/>
                <button type="submit"> Submit </button>
            </form>
        </>
    )
}

export default Forms;