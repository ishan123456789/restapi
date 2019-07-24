/**
 * Common dependencies import these are by default node packages and not installed through npm
 */
const https = require('https');
const http = require('http');
const url = require('url');
const stringDecoder = require('string_decoder').stringDecoder; // Will help us get the payload if any
const router = require('./router');
const config = require('./config');
const fs = require('fs');
const path = require('path');
const dH = require('./lib/data');

(async () => {
    try {
        let state = await dH.delete('test','testFile',{foo: 'bar1'});
        console.log('File create', state);
    } catch(e) {
        console.log("Error", e);
    }

})();
/**
 * These certs were generated for my system so won't help you
 * To create one on your own follow
 * https://reactpaths.com/how-to-get-https-working-in-localhost-development-environment-f17de34af046
 */
const options = {
    hostname: "demo.local",
    key: fs.readFileSync(path.normalize( __dirname + '/https/rootSSL.key')),
    cert: fs.readFileSync(path.normalize( __dirname + "/https/rootSSL.pem")),
    passphrase: '1234'
};

let unifiedServer = (req, res) => {
    console.log('hello foo', req, res);

    let parsedURL = url.parse(req.url, true);
    
    let path = parsedURL.pathname.replace(/^\/+|\/$/gm, '');
    console.log('Path', path);
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
        console.log('parsedURL', path);
    });
    console.log(router)
    if(router[path]) router[path](req, res);
    else router['404'](req, res);
}

https
.createServer(options, unifiedServer)
.listen(config.httpsPort)
.on("listening", () => {
    console.log(`listening on https://localhost:${config.httpsPort} in ${config.envName} environment`);
})

http
.createServer(unifiedServer)
.listen(config.httpPort)
.on("listening", () => {
    console.log(`listening on http://localhost:${config.httpPort} in ${config.envName} environment`);
});