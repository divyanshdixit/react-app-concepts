import React, {useState} from 'react';

const DigitalClock = () => {

    var time = new Date().toLocaleTimeString();
    const [currentTime, updateTime] = useState(time);

    setInterval( () => {
        time = new Date().toLocaleTimeString();
        updateTime(time);
    })

    return(
        <h1> Digital Clock time is: {currentTime} </h1>
    )
}

export default DigitalClock;