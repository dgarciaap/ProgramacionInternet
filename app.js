var person = {
    firstname: '',
    lastname: '',
    greet: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = Object.create(person);
john.firstname = 'John';//overwrite properties
john.lastname = 'Doe';

var jane = Object.create(person);
jane.firstname = 'Jane';//overwrite properties
jane.lastname = 'Doe';

console.log(john.greet());
console.log(jane.greet());//Llamar propiedad greet

///////////////////////////////////

//Objeto hereda de Events
var EventEmitter = require('events');
var util = require('util');

function Greetr() {
    this.greeting = 'Hello';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) {
    console.log(this.greeting + ': ' + data);//Primero imprime Hello world y luego emite greet que puede ser definido
    this.emit('greet', data);
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data) { //on está definido en 'events'
    console.log('Someone greeted' + ': ' + data);//llama primero a la cadena de prototipos, that's why imprime Hello world y luego emite greet
});

greeter1.greet('Tony');

//CALL APPLY//////////////////////

var obj = {
    name: 'John Doe',
    greet: function(param) {
        console.log(`Hello ${this.name}`);
    }
}

obj.greet();
obj.greet.call({name: 'Jane Doe'});//dif entre call y apply cómo se pasan los param
obj.greet.apply({name: 'Jane Doe'});//Se modifica a lo que this.name apunta
