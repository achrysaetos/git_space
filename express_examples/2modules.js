
//using your own modules
var express = require("express");
var app = express();

var square = require("./helperfor2");

console.log("The area of a square with a width of 4 is " + square.area(4));