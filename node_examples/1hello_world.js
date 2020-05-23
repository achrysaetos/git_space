
//creating a server and running it
var http = require('http');// http is just one of the built-in node modules we can use

http.createServer(function(req, res) {
  res.writeHead (200,{"Content-Type": "text/html"});
  res.end('Hello World, using node server...');
}).listen(8080);

console.log("Server running at http://localhost:8080");
//run with node hello_world.js