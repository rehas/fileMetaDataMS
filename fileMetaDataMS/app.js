var express = require('express');
var multer = require('multer');
var path = require('path');
var port = process.env.PORT || 1350;
console.log(port);


var app = express();

app.use('/', express.static(__dirname + '/public'));

//app.get('/', function (req, res) {
//    res.sendFile(__dirname + '/public/index.html');
//})

app.get('/favicon.ico', function (req, res) {
    res.end("<h1>Hello World</h1>");
})

app.get('/robots.txt', function (req, res) {
    res.end("<h1>Hello World</h1>");
})

app.listen(port, function() {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);

});