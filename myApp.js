var express = require('express');
var app = express();
var path = require('path');
var rootViewPath = __dirname + '/ui';
var rootViews = __dirname + '/ui/views';

//Exposing Node Modules directory to node
app.use('/node_modules', express.static(__dirname + '/node_modules'));
//Exposing root views to node
app.use(express.static(__dirname + '/ui'));
//Exposing nested views to node
app.use(express.static(__dirname + '/ui/views'));
//Exposing controllers to node
app.use(express.static(__dirname + '/ui/controllers'));

//Node Routes
app.get('/', function (req, res, next) {
  res.sendFile(path.join(rootViewPath, 'index.html'));
});

app.get('/home', function (req, res, next) {
  res.sendFile(path.join(rootViews, 'home.html'));
});

app.listen(process.env.PORT || 5000, function () {
  console.log('Example app listening on port 5000!');
})

