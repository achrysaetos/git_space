
//run with node hello_world.js
var http = require('http');// http is just one of the built-in node modules we can use

//create the server object
http.createServer(function(req, res) {
    res.writeHead (200,{"Content-Type": "text/html"});//include this http header with content type 
                                                        //if the response from the http server is supposed to be displayed as html
    res.write("Hello World");//write a response to the client
    res.end();//end the response
}).listen(8080);//server object listens on port 8080

console.log("Server running at http://localhost:8080");