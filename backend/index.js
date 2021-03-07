const express = require('express');
const bodyParser = require('body-parser');
var firebase = require("firebase/app");
require("firebase/firestore");
const port = 3000;
const app = express();



firebase.initializeApp(firebaseConfig);
//firebase.firestore()
//firebase.auth()

app.use(bodyParser.json())

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.status(200).send({message: "Test Endpoint"});
});

app.listen(port, () => console.log("Listening on port 3000"));
