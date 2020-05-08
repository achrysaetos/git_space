/*
const express = require("express");
const expressserver = express();

const PORT = process.env.PORT || 4001;

expressserver.listen(PORT, ()=>{
    console.log("listening on port");
});
*/

const express = require('express')
const app = express();

app.use(express.static(`${__dirname}/html_code`));

app.get('/', (req, res) => {
  res.send('Hello World, using express server...')
});

app.listen(process.env.PORT || 3000)
//app.listen(8000, () => {
  //console.log('Example app listening on port 8000!')
//});