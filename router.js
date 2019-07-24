let dataHandler = require('./lib/data');
let badResponse = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
            res.writeHead(200);
            res.end(JSON.stringify({'response': "Something went wrong!"}));

}
let router = {
    hello: async (req, res) => {
        try {
            console.log('Got in router')
            res.setHeader('Content-Type', 'application/json');
            res.writeHead(200);
            let data = await dataHandler.read('test','testFile');
            console.log("Data", data);
            res.end(JSON.stringify({'response': "Hello world!", ...data}));
        } catch(e) {
            console.log("Error:", e);
            badResponse(req, res);
        }
    },
    404: (req, res) => {
        console.log('Got in router')
        res.writeHead(404);
        res.end('Route not found');
    }
}

module.exports = router;