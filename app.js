var request = require('request');

request("https://us1.locationiq.com/v1/search.php?key=ea3e3eae4b14c1&q=Colima&format=json", function (error, response, body) {
  //JSON para convertir body a un objeto
  let info = JSON.parse(body);
    //Para acceder a propiedad de object [property] || object.property
    let lati = info[0].lat;
    let lngi = info[0].lon;
    console.log('Lat: ' + lati + '\n' + 'long: ' + lngi);
    //var celsiusToFahrenheit = require('celsius-to-fahrenheit');
request(`https://api.darksky.net/forecast/366bf5ba25d241ff04fb0c781f5c1c92/${lati},${lngi}`, function (error, response, body) {
 /* console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); */// Print the response status code if a response was received
  //JSON para convertir body a un objeto
  let info = JSON.parse(body);
    //Para acceder a propiedad de object [property] || object.property
    //info = (celsiusToFahrenheit(info.currently.temperature)).toFixed(4);
  console.log(`La temperatura es de ${info.currently.temperature} F°`); // Print the HTML for the Google homepage.
});
    var options = { method: 'GET',
    url: 'https://api.openuv.io/api/v1/uv',
    qs: { lat: `${lati}`, lng: `${lngi}`},
    headers: 
    { 'content-type': 'application/json',
        'x-access-token': 'f9936e83b61fb156275253e5f276fc50' } }

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            let uv = JSON.parse(body);
            console.log(uv);
          });
});