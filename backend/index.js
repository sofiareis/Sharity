const express = require('express');
const bodyParser = require('body-parser');
var firebase = require("firebase/app");
require("firebase/firestore");
const port = 3000;
const app = express();

var firebaseConfig = {
    apiKey: "AIzaSyBtdQKTgFD1zVBtqEpLBIutRSltlJcuUnM",
    authDomain: "sharity-eeda7.firebaseapp.com",
    projectId: "sharity-eeda7",
    storageBucket: "sharity-eeda7.appspot.com",
    messagingSenderId: "616864602761",
    appId: "1:616864602761:web:5efc629658f35352cfc458"
}

firebase.initializeApp(firebaseConfig);

app.use(bodyParser.json())
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = firebase.firestore();

app.get('/', function(req, res) {
  var ret = [];
  db.collection("users")
    .get()
    .then(snapshot => {
      const data = snapshot.docs.forEach(doc => {
        ret.push({id: doc.id, ...doc.data()});
        res.status(200).send(ret);
      })
    })
});

app.get('/needs', function(req, res) {
  var ret = [];
  db.collection("charities")
    .doc('0acW19H0ldHd1MFJ5gaj')
    .collection("needs")
    .get()
    .then(snapshot => {
      snapshot.docs.forEach(doc => {
         ret.push(doc.data());
      });
      res.send(ret);
    })
    .catch(err => console.log(err));
});

app.listen(port, () => console.log("Listening on port 3000"));
