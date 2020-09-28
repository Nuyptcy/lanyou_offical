http = require('http');
url = require('url');

var host = '127.0.0.1';
var port = 12345;

var xml = 'KerKer';

var server = http.createServer(
    function(req,res) {
        if (req.method === 'POST') {
            req.on('data', function (data) {
                console.log("Post data : " + data);
            });
        }

        var pathname = url.parse(req.url).pathname;

        if(pathname === '/') {
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end('^_^ ~');
        } else if(pathname === '/aboutme/') {
            res.writeHead(200,{'Content-Type':'text/xml'});
            res.end(xml);
        }
    }
);
server.listen(port);
console.log('Server running at http://' + host + ':' + port);