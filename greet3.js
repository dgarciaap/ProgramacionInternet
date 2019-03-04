//Se exporta un objeto completo

function Greetr() {
    this.greeting = 'Hello world!';
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = new Greetr();