
// Module CommonJS
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');



var contacts = [{
  id: 1,
  prenom: 'Romain',
  nom: 'Bohdanowicz'
},{
  id: 2,
  prenom: 'Jean',
  nom: 'Dupont'
}];

var app = express();
app.use(cors());
app.use(bodyParser.json());

// GET /api/v1/contacts => list
app.get('/api/v1/contacts', function(req, res) {
  res.json(contacts);
});

// POST /api/v1/contacts => create
app.post('/api/v1/contacts', function(req, res) {
  var contact = req.body;
  contact.id = contacts[contacts.length-1].id + 1;

  contacts.push(contact);

  res.status(201);
  res.json(contact);
});

// DELETE /api/v1/contacts => delete
app.delete('/api/v1/contacts/:id', function(req, res) {
  res.send('<b>Hello</b>');
});

app.listen(3000, function() {
  console.log('http://localhost:3000/');
});