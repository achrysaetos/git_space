
//These can return any content required, but must be called after all other app.use() and routes calls 
//so that they are the last middleware in the request handling process!
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});