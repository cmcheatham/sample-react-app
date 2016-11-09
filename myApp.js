var express = require('express');
var app = express();
var path = require('path');
var rootViewPath = __dirname + '/ui';

app.get('/', function (req, res) {
  res.send('Root');
})

app.get('/home', function(req, res, next){
    res.sendFile(path.join(rootViewPath, 'index.html'));
});

app.listen(process.env.PORT || 5000, function () {
  console.log('Example app listening on port 5000!');
})

