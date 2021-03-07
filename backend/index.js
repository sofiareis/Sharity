const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();

app.use(bodyParser.json())

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.status(200).send({message: "Test Endpoint"});
});

app.listen(port, () => console.log("Listening on port 3000"));
