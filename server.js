// Server side
const express = require('express');
const { readFile } = require('fs');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  readFile('./public/index.html', 'utf8', (err, html) => {
    if (err) {
      res.status(500).send('Sorry, out of order');
    }
    res.send(html);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});