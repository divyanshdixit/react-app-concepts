var e = 10;

function fun1(y){ // outer => vraibles , parameters
    let x = 10; // local
    function fun2() { // inner function => accessible
        console.log(x+y);
    }
    return fun2;
}

var res = fun1(20);
console.log(res());

// 


// 

