const crypto = require('crypto');
const secret = 'my-secret';  
const algorithm = 'aes192';

let encrypt = (password) => {
    // Use the async `crypto.scrypt()` instead.
    const cipher = crypto.createCipher(algorithm, secret);  
    let encryptedPassword = cipher.update(password, 'utf8', 'hex');  
    encryptedPassword += cipher.final('hex'); 
    console.log(encryptedPassword);
    return encryptedPassword;
}

let match = (encryptedPassword, passwordToMatch) => {
    const decipher = crypto.createDecipher(algorithm, secret);
    let decrypted = decipher.update(encryptedPassword, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    console.log(decrypted);
    return passwordToMatch === decrypted;
}
module.exports = {
    encrypt, match
}