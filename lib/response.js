let response = {};
/** Success */
response[200] = (res, data) => {
    console.log('Sending response', data);
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify({
        data
    }));
}
/** 
 * Some items missing
 * 
 * @param(message): String 
 */
response[422] = (res, message) => {
    console.log('Sending response', message);
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify({
        message
    }));
}

module.exports = response;