var express = require('express');
var multer = require('multer');
var port = process.env.PORT || 1350;
console.log(port);

var app = express();

app.get('/', function (req, res) {
    res.end("<h1>Hello World</h1>");
})

app.get('/favicon.ico', function (req, res) {
    res.end("<h1>Hello World</h1>");
})

app.get('/robots.txt', function (req, res) {
    res.end("<h1>Hello World</h1>");
})

app.listen(port, function() {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);

});