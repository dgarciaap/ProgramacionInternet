//Objeto hereda de Events
var EventEmitter = require('events');
var util = require('util');

function Greetr() {
    EventEmitter.call(this); //Super constructor (passed by reference)
    this.greeting = 'Hello';
}

util.inherits(Greetr, EventEmitter);//Hereda en forma incompleta (usar super constructor)

Greetr.prototype.greet = function(data) {
    console.log(this.greeting + ': ' + data);//Primero imprime Hello world y luego emite greet que puede ser definido
    this.emit('greet', data);
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data) { //on está definido en 'events'
    console.log('Someone greeted' + ': ' + data);//llama primero a la cadena de prototipos, that's why imprime Hello world y luego emite greet
});

greeter1.greet('Tony');

/*Ejemplo ll*/

var util = require('util');

function Person() {
    this.firstname = 'John';
    this.lastname = 'Doe';
}

Person.prototype.greet = function() {
    console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

function Policeman() {
    Person.call(this); //Super constructor
    this.badgenumber = '1234';
}

util.inherits(Policeman, Person);//incompleto (undefined)
var officer = new Policeman();
officer.greet();

