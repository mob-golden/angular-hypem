var express = require('express');
var app = express();
var https = require("https");

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.use('/scripts', express.static(__dirname + '/node_modules/'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

function fetchHttps(url, cb) {
  var req = https.get(url, function (res) {
    requestResponse = "";
    res.on("data", function(response) {
      requestResponse += response;
    });
    res.on("end", function() {
      if (res.statusCode === 404) {
        cb(new Error("Not Found"), null);
      } else {
        // For safety, do try-catch 
        try {
            cb(null, JSON.parse(requestResponse));
        } catch (err) {
            cb(new Error("Invalid JSON"), null);
        }
      }
    });
  });
  req.end();
  req.on("error", function(err) {
    cb(err, null);
  });
};

app.get('/hypemdata', function(req, res) {
  var page_num = parseInt(req.query.page_num);
  console.log(req.query.order_by + ": "+ page_num);
  if(req.query.order_by == "latest") {
    fetchHttps('https://api.hypem.com/playlist/latest/all/json/'+page_num, (error, response) => {
      res.send(response)
    });
  }
  if(req.query.order_by == "loved") {
    fetchHttps('https://api.hypem.com/playlist/loved/alfredogolden/json/'+page_num, (error, response) => {
      res.send(response)
    });
  }
  if(req.query.order_by == "posted") {
    fetchHttps('https://api.hypem.com/playlist/popular/all/json/'+page_num, (error, response) => {
      res.send(response)
    });
  }

})

app.all('/*', function(req, res, next) {
    res.sendFile('index.html', { root: __dirname + '/public' });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

