var express = require('express');
var multer = require('multer');
//var upload = multer({ dest : 'uploads/' });   
var path = require('path');
var port = process.env.PORT || 1350;
console.log(port);


var app = express();

app.use(express.static(__dirname + '/uploads'));

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads')
    },
    filename: function (req, file, callback) {
        console.log(file)
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

app.use('/', express.static(__dirname + '/public'));

//app.get('/', function (req, res) {
//    res.sendFile(__dirname + '/public/index.html');
//})

app.get('/favicon.ico', function (req, res) {
    res.end("<h1>Hello World</h1>");
})

var response = {
    size : 0,
};
app.post('/api/file/', function (req, res) {
    console.log("file handling");
    var upload = multer({
        storage : storage
    }).single('uFile');
    upload(req, res, function (err) {
        //res.end('File is uploaded');
        
        if (req.file !== undefined) {
            console.log(req.body);
            console.log("File is " + JSON.stringify(req.file));
            console.log("File size is  " + req.file.size);
            response["size"] = req.file.size;
        } else {
            console.log("File is currently undefined");
        }
        console.log("Response is " + JSON.stringify(response));
        res.redirect('/result');
    })
    

    //console.log("Multer File is  " + multerFile);
});

app.get('/result', function (req, res) {
    res.send(response);
});

app.get('/robots.txt', function (req, res) {
    res.end("<h1>Hello World</h1>");
})

app.listen(port, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);

});