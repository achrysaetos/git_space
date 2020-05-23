
//you can write your own middleware functions.
//the only difference between a middleware function and a route handler callback is that middleware functions have 
    //a third argument "next", which they are expected to call.
//you van add a middleware function to the processing chain with either "app.use()" or "app.add()".

//FOR EXAMPLE
var express = require('express');
var app = express();

// An example middleware function
var a_middleware_function = function(req, res, next) {
  // ... perform some operations
  next(); // Call next() so Express will call the next middleware function in the chain.
}

// Function added with use() for all routes and verbs
app.use(a_middleware_function);

// Function added with use() for a specific route
app.use('/someroute', a_middleware_function);

// A middleware function added for a specific HTTP verb and route
app.get('/', a_middleware_function);

app.listen(3000);
