const functions = require('firebase-functions');
const bodyParser = require("body-parser");
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

const hello = require('./route/hello');
hello.use(bodyParser.urlencoded({extended: true}));

exports.hello = functions.https.onRequest(hello);
