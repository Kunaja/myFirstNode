import	mongoose	from	'./config/mongoose';
import express from './config/express';
import passport from './config/passport';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.PORT = process.env.PORT || 3000;

var db =	mongoose();
var app = express();
var psp = passport();
app.listen(process.env.PORT, () => {
    console.log('Starting	node.js on	port	' + process.env.PORT);
});
module.exports = app;

/*var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.set('num', 1);
var num = app.get('num');
console.log(num); //1

app.use(function (req, res, next) {
    console.log(new Date().toString(), ':', req.path);
    next();
});

app.use(bodyParser.json());

app.get('/', function (req, res, next) {
    res.send('Hello World!');
});

app.post('/', (req, res, next) => {
    let body = req.body
    res.send(`k ${body.a}`)
})

app.get('/help', function (req, res, next) {
    res.send('Help me');
});

app.listen(3000, () => {
    console.log('Starting node on port 3000')
});*/
