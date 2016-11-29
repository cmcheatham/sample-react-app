var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var router = express.Router();

//Exposing Node Modules directory to node
app.use('/node_modules', express.static(__dirname + '/node_modules'));


//Exposing nested views to node
app.use(express.static(__dirname + '/views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//Node Routes
app.get('/', function (req, res, next) {
  res.sendFile(path.join(rootViewPath, 'index.html'));
});

// global controller for Access Control Allow Origin issues for now
app.all('/*',function(req,res,next){
  res.header('Access-Control-Allow-Methods','POST,GET,OPTIONS,PATCH,PUT');
  res.header('Access-Control-Expose-Headers','x-access-token,X-Access-Token,Content-Type');
  res.header('Access-Control-Allow-Origin' , '*' );
  res.header('Access-Control-Allow-Headers' , 'x-access-token,X-Access-Token,Content-Type' );
  next(); // http://expressjs.com/guide.html#passing-route control
});
app.listen(process.env.PORT || 5000, function () {
  console.log('Example app listening on port 5000!');
})

app.use(require('./server/apis.js'));


module.exports = app;
