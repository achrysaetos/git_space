
//using the file system to show a file in the browser
var http = require("http");
var fs = require("fs");

http.createServer((req,res)=>{
    fs.readFile("helperfor6.html",function(err,data){
        res.writeHead (200,{"Content-Type": "text/html"});
        res.write(data);
        return res.end();
    });
}).listen(8080);

console.log("Server running at http://localhost:8080");

//METHODS FOR CREATING NEW FILES, if the file does not exist then an empty file is created.
//fs.appendFile()   appends specified content to a file
//fs.open()         takes a "flag" as the second argument, and the file is opened taking the flag into account
//fs.writeFile()    replaces the specified file and content, or if file DNE, a new file is created with that content

//OTHER METHODS FOR UPDATING FILES
//fs.unlink()   deletes the specified file
//fs.rename()   renames the specified file
