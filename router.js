let router = {
    hello: (req, res) => {
            console.log('Got in router')
            res.setHeader('Content-Type', 'application/json');
            res.writeHead(200);
            res.end(JSON.stringify({'response': "Hello world!"}));
    },
    404: (req, res) => {
        console.log('Got in router')
        res.writeHead(404);
        res.end('Route not found');
    }
}

module.exports = router;