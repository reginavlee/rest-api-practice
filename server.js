const express = require('express');
const app = express();
const router = require('./server/routes');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

app.listen(port, 'localhost', () => {
  console.log("We are listening on: ", port);
})


