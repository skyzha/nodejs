var http = require('http');
var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello <b>World</b>');
    res.end("Hi, selamat datang di nodejs");
}).listen(8000);

console.log("server running on http://localhost:8000");