var express = require('express');
var app = express();
var path = require('path');
var rootViewPath = __dirname + '/ui';
var rootViews = __dirname + '/ui/views';

//Exposing Node Modules directory to node
app.use('/node_modules', express.static(__dirname + '/node_modules'));

//Exposing nested views to node
app.use(express.static(__dirname + '/views'));


//Node Routes
app.get('/', function (req, res, next) {
  res.sendFile(path.join(rootViewPath, 'index.html'));
});

app.listen(process.env.PORT || 5000, function () {
  console.log('Example app listening on port 5000!');
})

