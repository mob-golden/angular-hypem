var express = require('express');
var app = express();
var Hypem = require("node-hypem");

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.use('/scripts', express.static(__dirname + '/node_modules/'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/hypemdata', function(req, res) {
  var page_num = parseInt(req.query.page_num);
  console.log(req.query.order_by + ": "+ page_num);
  if(req.query.order_by == "latest") {
    Hypem.playlist.latest("all", page_num, function(result, result2){
      res.send(result2)
    });
  }
  if(req.query.order_by == "loved") {
    Hypem.user("alfredogolden").loved( page_num, function(result, result2){
      res.send(result2)
    });
  }
  if(req.query.order_by == "posted") {
    Hypem.playlist.popular("all", page_num, function(result, result2){
      res.send(result2)
    });
  }

})

app.all('/*', function(req, res, next) {
    res.sendFile('index.html', { root: __dirname + '/public' });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

