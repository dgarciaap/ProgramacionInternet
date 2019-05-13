var request = require('request');

request("https://us1.locationiq.com/v1/search.php?key=ea3e3eae4b14c1&q=Colima&format=json", function (error, response, body) {
  //Abre promesa con resolve y reject. Resolve regresa data y reject error
    p1 = new Promise(
    function(resolve, reject) {
      //Si recibe data 
      if(body) {
        let info = JSON.parse(body);
        let lati = info[0].lat;
        let lngi = info[0].lon;
        //regresas data en array
        resolve([lati,lngi]);
      } else {
        //Regresas error
        reject(err);
      }
    }).then(function(coordenadas) { //Entonces recibe array y lo imprime
      console.log('Lat: ' + coordenadas[0] + '\n' + 'long: ' + coordenadas[1]);
      //Hacer request en otro nivel
      request(`https://api.darksky.net/forecast/366bf5ba25d241ff04fb0c781f5c1c92/${coordenadas[0]},${coordenadas[1]}`, function (error, response, body) {
          p2 = new Promise( //Nueva promesa para obtener weather
          function(resolve, reject) {
            if(body) {
              let info = JSON.parse(body);
              let weather = info.currently.temperature;
              resolve(weather);
            } else {
              reject(err);
            }
          }
        ).then(function(weather) { //Recibe weather y lo imprime
          console.log(`La temperatura es de ${weather} F°`);
        }).catch(function(err) { //Catchear error
          console.log(err);
        })
    });
    var options = { method: 'GET', //Hacer request al mismo nivel del segundo (no necesitamos coordenadas eda)
    url: 'https://api.openuv.io/api/v1/uv',
    qs: { lat: `${coordenadas[0]}`, lng: `${coordenadas[1]}`},
    headers: 
    { 'content-type': 'application/json',
        'x-access-token': 'f9936e83b61fb156275253e5f276fc50' } }

        request(options, function (error, response, body) {
            p3 = new Promise(function (resolve, reject) { //Definir 3ra promesa
              if(body) {
                let uv = JSON.parse(body);
                resolve(uv);
              } else {
                reject(err);
              }
            }).then(function(uv) { //Recibe uv y lo imprime
              console.log(uv);
            }).catch(function(err) { //Finalmente catchea cualquier error
              console.log(err);
            }) 
          });
    }).catch(function(err) { //catch del primer request
      console.log(err);
    })
})



/*var rp = require('request-promise');

rp("https://us1.locationiq.com/v1/search.php?key=ea3e3eae4b14c1&q=Colima&format=json") 
  .then(data => {
    let info = JSON.parse(data);
    let lati = info[0].lat;
    let lngi = info[0].lon;
    console.log('Lat: ' + lati + '\n' + 'long: ' + lngi);
    let weather = rp(`https://api.darksky.net/forecast/366bf5ba25d241ff04fb0c781f5c1c92/${lati},${lngi}`)
    return weather;
  }).then(weather => {
    let info = JSON.parse(weather);
  })*/


/*var request = require('request');

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
  //let info = JSON.parse(body);
    //Para acceder a propiedad de object [property] || object.property
    //info = (celsiusToFahrenheit(info.currently.temperature)).toFixed(4);
  /*console.log(`La temperatura es de ${info.currently.temperature} F°`); // Print the HTML for the Google homepage.
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
});*/