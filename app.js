/*function statement
function greet() {
    console.log('hi');
}
greet();
//Refactor
let greet=()=>{
    console.log('hi');
}
greet();
/*
greet =()=> console.log('Cesario'); //Para regresar solo una linea

//functions are first class
let logGreeting =(fn)=> {
    fn();
}
logGreeting(greet);
/*
function logGreeting(fn) {
    fn();
}
logGreeting(greet);

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

var greet = require ('./greet.js'); //importa el modulo de greet
greet(); 

//objects
var person = {
    firstname: 'Diana',
    lastname: 'Garcia',
    greet : function() {
        console.log('Hello, ' + this.firstname + ' ' + this.lastname);
    }
};

person.greet();

console.log(person['firstname']); */

//Funcionamiento de modulos PATRONES
var greet = require('./greet');
greet();

var greet2 = require('./greet2').greet();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed hello world!';
//greet3 y greet 3b en la misma localidad de memoria
var greet3b = require('./greet3');
greet3b.greet();

//regresa un constructor
var greet4 = require('./greet4');
var grtr = new greet4();
grtr.greet();

//regresa un objeto personalizado "Revealing object pattern"
var greet5 = require('./greet5').greet;
greet5();


