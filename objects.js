/*var person = {
    firstname: 'Diana',
    lastname: 'Garcia',
    greet : function() {
        console.log('Hello, ' + this.firstname + ' ' + this.lastname);
    }
};

person.greet();

console.log(person['firstname']); //imprimir atributo de objeto */

//function constructors

function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

//Prototipo de todo objeto creado con person (una función)

Person.prototype.greet = function() {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
};

var john = new Person('John', 'Doe');
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();