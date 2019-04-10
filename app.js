var express = require('express');
var app = express();

//Environmente variables: global variables specific to the environment (server) our code is living in
var port = process.env.PORT || 3000; //asigna el 3000 con || sólo si está disponible

//http method: specifies the type of action the request wishes to make (verbs: GET, POST, DELETE)
app.get('/', function(req, res) {
    res.send('<html><head><body><h1>Hello world!</h1></body></head></html>');
});

//agregar ruta de parametros
app.get('/person/:id', function(req, res) {
    res.send('<html><head><body><h1>Person: ' + req.params.id + '</h1></body></head></html>');
});

//Express ya tiene json incluido. Pedir objeto
app.get('/api', function(req, res) {
    res.json({firstname: 'John', lastname: 'Doe'});
});

app.listen(port); //Create Server, http port