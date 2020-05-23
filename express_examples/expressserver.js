const express = require('express')
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

app.use(express.static(`${__dirname}/html_files`));

app.get('/', (req, res) => {
  res.send('Hello World, using express server...')
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});