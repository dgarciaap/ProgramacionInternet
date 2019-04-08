var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) { //request and response
    if(req.url === '/'){
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    
    else if(req.url === '/api'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        var obj = {
        firstname: 'John',
        lastname: 'Doe'
        };
        res.end(JSON.stringify(obj));//JSON key value pairs
    }
    else {
        res.writeHead(404);
        res.end();
    }

}).listen(1337, '127.0.0.1');//port

//serialize: translating an object into a format that can be stored or transferred
//routing: mapping http request to content