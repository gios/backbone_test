var express = require('express');
var fs = require('fs');
var dataDefault = require('./kendoListView/dataDefault.js');
var app = express();

app.use(express.static('kendoListView'));

app.get('/items', function (req, res) {
  res.send(dataDefault);
});

var server = app.listen(3000, function () {
  console.log("Listening...");

});
