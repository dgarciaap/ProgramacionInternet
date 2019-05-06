var request = require('request');

var celsiusToFahrenheit = require('celsius-to-fahrenheit');
request('https://api.darksky.net/forecast/366bf5ba25d241ff04fb0c781f5c1c92/19.2433, -103.725', function (error, response, body) {
 /* console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); */// Print the response status code if a response was received
  //JSON para convertir body a un objeto
  let info = JSON.parse(body);
    //Para acceder a propiedad de object [property] || object.property
    info = (celsiusToFahrenheit(info.currently.temperature)).toFixed(4);
  console.log(`La temperatura es de ${info} F°`); // Print the HTML for the Google homepage.
});