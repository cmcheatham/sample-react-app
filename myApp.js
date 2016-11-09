var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Root');
})

app.listen(process.env.PORT || 5000, function () {
  console.log('Example app listening on port 3001!');
})

