var http = require('http');
http.createServer(function(req, res){
    res.end("Hello Server");
}).listen(8000);
console.log("server running on http://localhost:8000");