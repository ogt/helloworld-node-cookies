var port = process.env.PORT || 8081; 

var express = require('express');
var app = express()
    .use(express.logger('dev'))
    .use(express.favicon('public/favicon.ico'))
    .use(express.static(__dirname + '/public'))
    .use(express.errorHandler({dumpExceptions: true, showStack: true}))
.listen(port);


/*
var connect = require('connect');
var app = connect()
    .use(connect.logger('dev'))
    .use(connect.favicon('public/favicon.ico'))
    .use(connect.static(__dirname + '/public'))
    .use(connect.errorHandler({dumpExceptions: true, showStack: true}))
.listen(port);
*/


/*
var connect = require('connect');
connect.createServer(
    connect.logger('dev'),
    connect.favicon('public/favicon.ico'),
    connect.static(__dirname + '/public'),
    connect.errorHandler({dumpExceptions: true, showStack: true})
).listen(port);
*/

console.log('Server running at http://127.0.0.1:'+port+'/');
