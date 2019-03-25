'use strict';

//Objeto hereda de Events
var EventEmitter = require('events');
var util = require('util');

class Greeter extends EventEmitter{ //Refactor
    constructor(firstname, lastname) {
        super();//Al agregar el extends para herencia
        this.firstname = firstname;
        this.lastname = lastname;
        this.greeting = 'Someone greeted ';
    }

    greet(data) {
        console.log('Hello, ' + this.firstname + ' ' + this.lastname);
        console.log(`${ this.greeting }: ${ data }`);
        this.emit('greet', data);
        //console.log('Hello, ' + this.firstname + ' ' + this.lastname);
    }
}
var greeter1 = new Greeter('John', 'Doe');
greeter1.greet('John');
//util.inherits(Greeter, EventEmitter);//Hereda en forma incompleta (usar super constructor)

/*var john = new Greeter('John','Doe');
john.greet();

var jane = new Greeter('John','Doe');
jane.greet();*/

