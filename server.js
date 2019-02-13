var http = require('http');
var helloServer = http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	console.log(req.url);
	if (req.url=='/') {
		res.end('Home');
	}
	else if(req.url=='/about'){
		res.end('About');
	}
	else{
		res.end('Hello Word');
	}
})
helloServer.listen(8001);
exports.message='server created successfully';
exports.port='8001';