//console.log("holamundo");

const http = require("http");
http.createServer(function(request, response){
response.writeHead(200, {'Content-Type': 'text/plain'});
response.end("Hola Mundo");
}).listen(3000);

console.log("Server running: http://localhost:3000");