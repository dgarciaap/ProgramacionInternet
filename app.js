const express = require('express');
const app = express();
const mongoose = require('mongoose');

//Pueda recibir datos por body
app.use(express.json());
mongoose.connect('mongodb://test:Camv1998&@ds019756.mlab.com:19756/nosqltest', {useNewUrlParser: true});

const Schema = mongoose.Schema;
//Definir schema
const personSchema = new Schema ({
  firstname: String,
  lastname: String,
  address : String
});

//Darle la estructura de personSchema
const Person = mongoose.model('Person', personSchema);

const diana = Person ({
  firstname: 'Diana',
  lastname: 'Garcia',
  address: '666 Main St.'
});

//save the user
diana.save(function(err) {
  if(err) throw err;

  console.log('person saved!');
});

//Environmente variables: global variables specific to the environment (server) our code is living in
const port = process.env.PORT || 3000; //asigna el 3000 con || sólo si está disponible

//ENDPOINT
//agregar ruta de parametros
app.get('/person/:name', function(req, res) {
    let info = new Person({ //nueva instancia de esquema
      firstname: req.params.name //obtener nombre por queryparams (lo que pones en la ruta: http://localhost:3000/person/diana) se graba diana 
    })
    info.save((err) => {
      if(err) throw err;
      res.json(info);
    })
});

app.listen(port); //Create Server, http port