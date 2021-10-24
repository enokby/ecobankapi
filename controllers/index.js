var normalizedPath = require("path").join(__dirname, ".");
require("fs").readdirSync(normalizedPath).forEach(function(file) {
  require("./" + file);
});

var base = require('../server');

base.app.get('/', (req, res) => {
    res.send('ecobankapi :) ©2021 by Mohamed Kabir KONE.');
});