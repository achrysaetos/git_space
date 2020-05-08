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

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});