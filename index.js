/**
 * Common dependencies import these are by default node packages and not installed through npm
 */
const http = require('http');
const url = require('url');
const stringDecoder = require('string_decoder').stringDecoder; // Will help us get the payload if any

let server = http.createServer((req, res) => {
    console.log('hello foo', req, res);

    let parsedURL = url.parse(req.url, true);
    
    let path = parsedURL.pathname.replace(/^\/+|\/$/gm, '');

    let method = req.method;
    console.log('method', method);
    var queryStringObject = parsedURL.query;
    var headerObject = req.headers;
    console.log('queryString need to parse with JSON', queryStringObject);
    console.log('headerObject need to parse with JSON', headerObject);
    // Sends response to the user else the request struck till timeout
    // var decoder = new stringDecoder('utf-8');
    let buffer = '';
    req.on('data', (chunk) => buffer+=chunk);
    req.on('end', _ => {
        console.log('finalDataThatWas sent', buffer);
        res.end('Got it?');
        console.log('parsedURL', path);
    });
});

server.listen(3000);