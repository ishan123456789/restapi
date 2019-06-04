const http = require('http');

let server = http.createServer((req, res) => {
    console.log('hello foo', req, res);
    res.end('Got it?');
});

server.listen(3000);