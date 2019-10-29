const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

//const port = 5000;

//app.use(express.static(__dirname + '/'));

router.get('/', (req, res) => {
    res.sendFile(__dirname + 'Users/maii/Desktop/portfolio-netlify/index.html');
});

router.get('/download', (req, res) => {
    var file = __dirname + 'Users/maii/Desktop/portfolio-netlify/public/Maryna Salii Resume.pdf';
    res.download(file);
});

//app.listen(process.env.PORT || port);

app.use('/.netlify/functions/server', router);

module.exports = app;
module.exports.handler = serverless(app);

