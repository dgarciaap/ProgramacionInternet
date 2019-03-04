//Exporta sólo lo que quiere a través de un object literal (función greet)
//Se mantienen otras propiedades privadas
//Regreso objeto con las propiedades y métodos que quiero
var greeting = 'Hello world!!!!!!';

function greet() {
    console.log(greeting);
}

module.exports = {
    greet: greet //key and value (if they have the same name you only call one) 
}

