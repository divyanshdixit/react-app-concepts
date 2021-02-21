import React from 'react';

function add(x,y){
    let sum = x+y;
    return <h2> Addition of {x} and {y} is {sum}</h2>

}

function sub(x,y){
    return (
        <h2> Substraction of {x} and {y} is {x-y}</h2>
    )
}

function multiply(x,y){
    return (
        <h2> Multiplication of {x} and {y} is {x*y}</h2>
    )
}

function divide(x,y){
    var division = x/y;
    return (
        <h2> Division of {x} and {y} is {division.toFixed(2)}</h2>
    )
}

// +, -, /, *, 2**3

export {add, sub, multiply, divide};