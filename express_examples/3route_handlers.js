
//for routing. check "helperfor3.js"!!
var express = require("express");
var app = express();

var helperfor3 = require("./helperfor3.js");

app.listen(3000, function(){
    console.log("go to http://localhost:3000 and http://localhost:3000/about");
});

app.use(helperfor3);