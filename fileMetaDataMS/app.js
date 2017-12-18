var port = process.env.port;
var express = require('express');
console.log(port);

var app = express();

app.use('/', function (req, res) {
    res.send(req.headers);
})

app.listen(port, function() {
console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);

});