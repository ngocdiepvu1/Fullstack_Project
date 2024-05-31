// Server side
const express = require('express');
const path = require('path'); // Require the path module
const { readFile } = require('fs');
const app = express();
const port = 3000;

// app.use(express.static('public'));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/', (req, res) => {
  readFile(path.join(__dirname, 'index.html'), 'utf8', (err, html) => {
    if (err) {
      res.status(500).send('Sorry, out of order');
      return;
    }
    res.send(html);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});