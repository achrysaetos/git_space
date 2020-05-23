
//using our own modules to add features
var http = require("http");
var dt = require("./helperfor2");

http.createServer(function (req, res){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("Date and time is: "+dt.myDateTime());
    res.end()
}).listen(8080);

console.log("running on http://localhost:8080");