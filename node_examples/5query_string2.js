
//more into query strings and applications
var http=require("http");
var url=require("url");

http.createServer(function(req,res){
    res.writeHead (200,{"Content-Type": "text/html"});
    var q = url.parse(req.url,true).query;
    var txt = q.year+" "+q.month;
    res.end(txt);
}).listen(8080);

console.log("Server running at http://localhost:8080/?year=2020&month=May");// shows "2020 May"