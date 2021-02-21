const value = "This is export default."
const secondValue = "Rest are normal export";

function firstName(){
    let firstname = "Divyansh";
    return firstname;
}

function lastName(){
    let lastname = "Dixit";
    return lastname;
}

// make one default
export default value;

export {secondValue, firstName, lastName};