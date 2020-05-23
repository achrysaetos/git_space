
/*
Template engines (referred to as "view engines" by Express) allow you to specify the structure of an output document 
in a template, using placeholders for data that will be filled in when a page is generated. 

In your application settings code you set the template engine to use and the location where Express should 
look for templates using the 'views' and 'view engines' settings, as shown below 
(you will also have to install the package containing your template library too!)
*/

const express = require('express');
const path = require('path');
const app = express();

// Set directory to contain the templates ('views')
app.set('views', path.join(__dirname, 'views'));

// Set view engine to use, in this case 'some_template_engine_name'
app.set('view engine', 'some_template_engine_name');

/*
The appearance of the template will depend on what engine you use. Assuming that you have a template file 
named "index.<template_extension>" that contains placeholders for data variables named 'title' and "message", 
you would call Response.render() in a route handler function to create and send the HTML response as shown below.
*/
app.get('/', function(req, res) {
    res.render('index', { title: 'About dogs', message: 'Dogs rock!' });
});

/*
FINAL THOUGHTS
Express makes no assumptions in terms of structure or what components you use. Routes, views, static files, 
and other application-specific logic can live in any number of files with any directory structure. While it 
is perfectly possible to have the whole Express application in one file, typically it makes sense to split 
your application into files based on function (e.g. account management, blogs, discussion boards) and 
architectural problem domain (e.g. model, view or controller if you happen to be using an MVC architecture).
*/