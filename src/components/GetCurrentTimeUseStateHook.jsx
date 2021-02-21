import React, { useState } from 'react';

var currentTime = new Date().toLocaleTimeString();

const GetCurrentTime = () =>{
    // use useState Hook to change time

    var state = useState();
    var [initialTime, updateTime] = useState(currentTime);

    const changeTime = () => {
        // if we use above currentTime variable here it'll show error scope issue
        var updatedTime = new Date().toLocaleTimeString();
        updateTime(updatedTime);
    }

    return(
        <>
            <h1> {initialTime} </h1>
            <button type="button" onClick={changeTime}> Get Time </button>
        </>
    )
}

export default GetCurrentTime;