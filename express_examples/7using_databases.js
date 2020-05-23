
/*
Express apps can use any database mechanism supported by Node 
(Express itself doesn't define any specific additional behaviour/requirements for database management). 
There are many options, including PostgreSQL, MySQL, Redis, SQLite, MongoDB, etc.
In order to use these you have to first install the database driver using NPM. 
*/

//for example, if we use MongoDB v3, we can write the following after running "npm install mongodb" in the terminal
let MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/animals', function(err, client){
   if(err) throw err;
   
   let db = client.db('animals');
   db.collection('mammals').find().toArray(function(err, result){
     if(err) throw err;
     console.log(result);
     client.close();
   });
});
//alternatively, we can use ORMs to keep writing in the same language, but that is a topic for another time...