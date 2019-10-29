var express = require('express');
var serverless = require('serverless-http');
var app = express();

const port = 5000;

app.use(express.static(__dirname + '/'));

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/index.html');
});

app.get('/download', function (req, res) {
    var file = __dirname + '/public/Maryna Salii Resume.pdf';
    res.download(file);
});

app.listen(process.env.PORT || port);

module.exports.handler = serverless(app);

