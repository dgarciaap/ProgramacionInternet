var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) { //request and response
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    var html = fs.readFileSync(__dirname + '/index.html','utf8');//utf8 formato en que me regresa los datos (string)
    var message = "Hello world...";
    html = html.replace('{Message}', message);//Busca string {Message} y reemplaza
    res.end(html);

}).listen(1337, '127.0.0.1');//port

//template: text designed to be the basis for final text {Message} at index.html