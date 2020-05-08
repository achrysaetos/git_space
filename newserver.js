/*
const http = require("http");

let requestListener = (request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("hello world!\n");
    response.end();
}

const server = http.createServer(requestListener);
server.listen(3000);
*/
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});