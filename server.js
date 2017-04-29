'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const isProduction = process.env.NODE_ENV === 'production';
var compression = require('compression')
app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json());
app.use(compression());
app.use(express.static(__dirname + '/dist'));

app.get('/*', (request, response) => {
  response.sendFile(__dirname + '/dist/index.html');
});

// We only want to run the workflow when not in production
if (!isProduction) {

  // We require the bundler inside the if block because
  // it is only needed in a development environment. Later
  // you will see why this is a good idea
  var bundle = require('./bundle.js');
  bundle(app.get('port') - 1);

}


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});