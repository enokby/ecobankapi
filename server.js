const express = require('express'),
bodyParser = require('body-parser');
const config = require('./config');
const app = express();
const PORT = process.env.PORT || 8333;

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log('Le service milliardAccess ecoute sur ' + PORT);
  require('./controllers');
});

exports.app = app;
exports.config = config;