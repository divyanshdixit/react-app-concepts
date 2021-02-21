// Hooks - introduced in 16.8 version
/*
use state and lifecycle methods withour writing class
hooks are function which hook into react state and lifecycle methods from functional components

it doesn't work inside class

Hooks should be at top level at react, 

Hooks can always be called inside functional component or custom hook 

*/

import React, { useState } from 'react';

var count =0;

function Counter(){
    
    // useState hook return [currentstate, setStateFunction]

    // use array destructuring
    /*
    const name = ['div', 'dixit'];
    var name0 = name[0]
    var name1 = name[1] 

    const [name0, name1] = name; // name0 => represent first element in name array and so on.
    */

    var [InitialStateVal,UpdateStateVal] = useState(count);
    
    const countMe = () => {
        InitialStateVal++;
        UpdateStateVal(InitialStateVal);
    }

    return (
        <>
            <h1> Hey, I'm use state Hook</h1>
            <p> Now my count is {InitialStateVal}</p>
            <button type="button" onClick={countMe}> Count me! </button>
        </>
    )
}

export {Counter, count};