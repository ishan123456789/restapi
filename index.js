/**
 * Common dependencies import these are by default node packages and not installed through npm
 */
const http = require('http');
const url = require('url');

let server = http.createServer((req, res) => {
    console.log('hello foo', req, res);

    let parsedURL = url.parse(req.url, true);

    let path = parsedURL.pathname.replace(/^\/+|\/$/gm, '');
    // Sends response to the user else the request struck till timeout
    res.end('Got it?');
    console.log('parsedURL', path);
});

server.listen(3000);