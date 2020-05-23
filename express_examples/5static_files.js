
//You can use the express.static middleware to serve static files, including your images, CSS and JavaScript.
//static() is the only middleware function that is actually part of Express.

app.use(express.static('public'));//serve images, CSS files, and JavaScript files from a directory named 'public' at the 
                                    //same level as where you call node. You can call static() multiple times to serve multiple directories. 
app.use('/media', express.static('public'));//You can also create a virtual prefix for your static URLs, rather than having the files added to the base URL. 
                                            //Now, you can load the files that are in the public directory from the /media path prefix.
