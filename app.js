/*function statement
function greet() {
    console.log('hi');
}
greet();*/
//Refactor
let greet=()=>{
    console.log('hi');
}
greet();
/*
greet =()=> console.log('Cesario'); //Para regresar solo una linea*/

//functions are first class
let logGreeting =(fn)=> {
    fn();
}
logGreeting(greet);
/*
function logGreeting(fn) {
    fn();
}
logGreeting(greet);*/

//function expression (funcion anonima)
let greetMe = function() {
    console.log('Hello there');
}
greetMe();

//it's first-class
logGreeting(greetMe);

//use a function expression on the fly
logGreeting(function() {
    console.log('Hi!');
})

