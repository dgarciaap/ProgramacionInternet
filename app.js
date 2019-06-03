const express = require('express');
const app = express();
const port = process.env.PORT || 3000; //asigna el 3000 con || sólo si está disponible
const response = {
  error: false,
  status: 200,
  message: 'ok'
}
//ruta que regresa response
app.get('/', (req, res) => {
  res.json(response);
});

//ruta para obtener usuario a través de req.params
app.get('/user/:user', (req, res) => {
  if(req.params.user > 50)
  {
    response.error = false;
    response.status = 200;
    response.message = 'ok';
    res.json(response);
  } 
  else {
    response.error = true;
    response.status = 400;
    response.message = 'error';
    res.json(response);  
  }
});

app.listen(port); //Create Server, http port