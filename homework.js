const express = require('express');
const app = express();
app.listen(1337);

const restV1 = express.Router();

restV1.get('/', (req, res) => {
  res.sendStatus(200);
  res.send('Hello, Express.js');
});
restV1.get('/hello' || '/hello/', (req, res) => {
  res.sendStatus(200);
  res.send('Hello stranger!')
});
restV1.get('/hello/:name', (req, res) => {
  res.sendStatus(200);
  res.send(`Hello, ${req.params.name}`)
});

restV1.all('/sub/url/all' || '/sub/url/all/', (req, res) => {
  res.send(`You requested URI: ${req.url}`)
})

restV1.post('/post' || '/post/', (req, res) => {
  if (res.params) {
    res.json(req.params)
  } else {
    res.sendStatus(404);
  }
});

app.use('/api/v1', restV1);