const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://test89:test89@ds251632.mlab.com:51632/addressbookaz', {useNewUrlParser: true});

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

//get all the users
Person.find({}, function(err, users) {
  if(err) throw err;

  //object of all the users
  console.log(users);
});