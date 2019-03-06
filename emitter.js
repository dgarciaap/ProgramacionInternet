//kinda así funciona el módulo 'events' de js 
//Event listener: code that responds to an event
function Emitter() {
    this.events = {};
}

Emitter.prototype.on = function(type, listener) {
    this.events[type] = this.events[type] || []; //Si es un array si no lo crea y mete el type
    this.events[type].push(listener);
}

//Invocar todo por type(property)
Emitter.prototype.emit = function(type) {
    if(this.events[type]) {
        this.events[type].forEach(function(listener) {
            listener();
        });
    }
}

module.exports = Emitter; //exporta constructor