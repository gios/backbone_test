var express = require('express');
var fs = require('fs');
var dataDefault = require('./dataDefault.js');
var app = express();

app.use(express.static('rating_view'));

app.get('/items', function (req, res) {
  res.send(dataDefault.dataList(0, 10));
});

app.get('/rating', function (req, res) {
  res.send(dataDefault.dataRating(0, 10));
});

var server = app.listen(3000, function () {
  console.log("Listening...");
});
