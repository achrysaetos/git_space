
//using query strings to change content
var http = require('http');

//create the server object
http.createServer(function(req, res) {
    res.writeHead (200,{"Content-Type": "text/html"});
    res.write(req.url);//try running http://localhost:8080/iamthebest
    res.end();
}).listen(8080);

console.log("Server running at http://localhost:8080");