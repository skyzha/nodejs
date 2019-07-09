var http = require('http');

// var server = http.createServer( function(request, response) {
//     response.writeHead(200, {'Content-Type': 'application/json'});
//     response.write('{"message": "Hello World"}');
//     response.end();
// }).listen(8000);

var server = http.createServer( function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('URL: ' + request.url);
    response.end();
}).listen(8000);

console.log("server running on http://localhost:8000");