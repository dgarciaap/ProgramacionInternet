function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.greet = function() {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
}

var john = new Person('John','Doe');
john.greet();

//pass by value
function change(b) {
    b = 2;
}

var a = 1;
change(a);
console.log(a);

//pass by reference
function changeObj(d) {
    d.prop1 = function() {};
    d.prop2 = {};
}

var c = {};
c.prop1 = {};
changeObj(c);
console.log(c);

//scope: where in code u have access to a particular function
//invocar inmediatamente una function expression (IIFE)

var firstname = 'Jane';

(function(lastname) {
    var firstname = 'John';
    console.log(firstname);
    console.log(lastname)
}('Doe')); //parentésis invoca inmediatamente

console.log(firstname);
