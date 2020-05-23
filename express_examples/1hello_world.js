
//hello world in express! notice that we imported the express package.
var express = require("express");
var app = express();//has all the methods we need. must instantiate to use.

//shows a route definition. app.get() specifies a callback function when there is a GET request with a path "/".
app.get("/", function(req,res){
    res.send("Hello World!");
});

//starts up the server on port 3000
app.listen(3000, function(){
    console.log("go to http://localhost:3000");
});
//run with "node ./1hello_world.js" in the terminal