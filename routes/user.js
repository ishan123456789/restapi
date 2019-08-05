let db = require('../lib/data');
let response = require('../lib/response');
let encrypt = require('../lib/encrypt_password');
let helper = require('../lib/helpers');

let handler = {};
handler.post = (req, res) => {
    console.log("payload in", req.payload);
    let {userName, phoneNumber, password, email, tos} = req.payload;
    let nonValidItems = helper.validateKeys({userName, phoneNumber, password, email, tos});
    if(nonValidItems.length > 0) {
        return response[422](res, `${nonValidItems.join(',')} are invalid`);
    }
    password = encrypt.encrypt(password);
    db.create('users', phoneNumber, {userName, phoneNumber, password, email, tos});
    response[200](res, {userName, phoneNumber, password, email, tos});
}

handler.get = (req, res) => {
    
}

handler.put = (req, res) => {
    
}

handler.delete = (req, res) => {
    
}

module.exports = (req, res) => {handler[req.method.toLowerCase()](req, res)};;