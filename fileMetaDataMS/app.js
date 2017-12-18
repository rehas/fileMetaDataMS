var port = process.env.port || 1337;
var express = require('express');
console.log(port);

var app = express();

app.use('/', function (req, res) {
    res.send(req.headers);
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