Destructring : unpacking value of array

var props = {
    name: 'Div',
    age: 24,
    city:'kanpur'
}

var name = props.name;
var age = props.age;
var city = props.city;

var {x, y, z} = props

{
    name: 'Div',
    age: 24,
    city:'kanpur'
}

var arr = [ 12 , "Divyansh", 34, 30, 70, 100];

var x = arr[0];
var y = arr[1];
var z = arr[2];

var [x,y,z] = arr;
var [x, , , , ,z] = arr;

function Example(){
    console.log(x , y)
}

// 
var obj = {
    name:"Divyansh",
    Max: function(arr){
        return this.username + ' ' + this.city + ' ' + this.country + ' ' + this.age
    }
}

var fobj = {
    username: "Div",
    country:"India"
}

obj.fname.call(null, 24, 'kanpur') // argument send as seprate
obj.fname.apply(null,[ 1,2,3,4,5]) // as an array

// bind() 