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
    user: (req, res) => {
        require('./routes/user')(req, res);
    },
    404: (req, res) => {
        res.writeHead(404);
        res.end('Route not found');
    },
    405: (req, res) => {
        res.writeHead(405);
        res.end('Method not allowed');
    }
}

module.exports = router;