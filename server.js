var http = require('http');
var helloServer = http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World');
})
helloServer.listen(8001);
exports.message='server created successfully';