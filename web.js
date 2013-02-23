var port = process.env.PORT || 8081; 
var connect = require('connect');
connect.createServer(
    connect.favicon('public/favicon.ico'),
    connect.static(__dirname + '/public'),
    connect.logger('dev')
).listen(port);
 
console.log('Server running at http://127.0.0.1:'+port+'/');
