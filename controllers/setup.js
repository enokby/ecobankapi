var base = require('../server');
var service = require('../services/setup');
var app = base.app;

app.get('/auth/token', (req, res) => {
    service.getToken().then(function(data){
      res.send(data);    
    },function(err){
      res.status(400).send(err);
    });
});
  
