import React, {useState} from 'react';
import value from './ExpoImpo';

const ReactForms = () => {

    const [Value, setValue] = useState('');
    const [SubmitVlaue, setSubmitVlaue] = useState();

    function changeEvent(event) {
        setValue(event.target.value);
    }

    function clickEvent() {
        setSubmitVlaue(Value);
        setValue('');
    }

    return(
        <>
            {/* Without using form tag and submit type button */}
            <h1> Changing Value {Value} </h1>
            <h1> Value on click submit button {SubmitVlaue} </h1>
            <input type="text" placeholder="Enter your text" value={Value} onChange={changeEvent}/>
            <button type="button" onClick={clickEvent}> Submit value</button>
        </>
    )
}

export default ReactForms;