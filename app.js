//object properties and methods
var obj = {
    greet: 'Hello' //key and value
}

console.log(obj.greet);
console.log(obj['greet']);//Acceder a la propiedad de un obj mediante su índice
var prop = 'greet';
console.log(obj[prop]);

//functions and arrays
var arr = [];

arr.push(function () {
    console.log('Hello world 1');
});
arr.push(function () {
    console.log('Hello world 2');
});
arr.push(function () {
    console.log('Hello world 3');
});

arr.forEach(function(item) { //invoca a cada func dentro del array
    item();
});

//------------------------------------------------------------

//COMO SE EXPORTA EL CONSTRUCTOR SE CREA NUEVA INSTANCIA (si importas emitter.js)
var Emitter = require('events'); //modulo de JS on and emit already exist
var eventConfig = require('./config').events;

var emtr = new Emitter();

//las metes al array 'greet' is the type
emtr.on(eventConfig.GREET, function() { //Acceder a la propiedad del object literal
    console.log('Somewhere, someone said hi');
});

//magic string: a string that has a special meaning in our code
emtr.on('greet', function() { //Si en 'greet' ocurre typo valió, por eso eventConfig.GREET
    console.log('A greeting ocurred!');
});

console.log('Hi!');
emtr.emit('greet'); //invoca a los de tipo greet


