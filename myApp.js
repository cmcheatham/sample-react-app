var express = require('express');
var app = express();
var path = require('path');
var rootViewPath = __dirname + '/ui';
var rootViews = __dirname + '/ui/views';


app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/ui'));
app.use(express.static(__dirname + '/ui/views'));

//app.get('/', function (req, res) {
//  res.send('Root');
//})
app.get('/', function (req, res, next) {
  res.sendFile(path.join(rootViewPath, 'index.html'));
});

app.get('/home', function (req, res, next) {
  res.sendFile(path.join(rootViews, 'home.html'));
});

app.listen(process.env.PORT || 5000, function () {
  console.log('Example app listening on port 5000!');
})

