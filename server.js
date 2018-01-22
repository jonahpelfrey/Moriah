var express 	= require('express');
var app 		= express();
var morgan 		= require('morgan');
var path		= require('path');
var bodyParser 	= require('body-parser');
var server 		= require('http').createServer(app);

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
}

app.use(allowCrossDomain);
app.use(express.static(path.join(__dirname, '/dist'))); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '/dist/index.html'));
});

server.listen(process.env.PORT || '8080');
console.log('Server Running');