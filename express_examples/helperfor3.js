
var express = require("express");
var router = express.Router();

//to home page
router.get("/", function(req,res){
    res.send("I am home!");
});

//to about page
router.get("/about", function(req,res){
    res.send("About this...");
});

module.exports=router;

