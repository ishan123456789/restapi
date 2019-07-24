/**
 * Dependencies
 */
const fs = require('fs');
const path = require('path');

let lib = {};
let basePath = path.join(__dirname,'../.data');

lib.create = (dir, file, data) => {
    return new Promise((resolve, reject) => {
        let filePath = path.join(basePath, dir,`${file}.json`);
        console.log('filePath', filePath);
        fs.open(filePath, 'wx', function(err, fd) {
            console.log('File Description', fd);
            if(err || !fd) return reject({err});
            fs.writeFile(fd, JSON.stringify(data), function(err) {
                if(err) return reject({err, message:'error while write file'});
                resolve('Successfully saved');
            })
        })
    })
}

lib.read = (dir, file) => {
    return new Promise((resolve, reject) => {
        let filePath = path.join(basePath, dir, `${file}.json`);
        fs.readFile(filePath, 'utf8', function(err, data) {
            if(err) return reject({err});
            resolve(data);
        })
    })
}

lib.update = (dir, file, data) => {
    return new Promise((resolve, reject) => {
        let filePath = path.join(basePath, dir,`${file}.json`);
        console.log('filePath', filePath);
        fs.open(filePath, 'r+', function(err, fd) {
            console.log('File Description', fd);
            if(err || !fd) return reject({err});
            fs.writeFile(fd, JSON.stringify(data), function(err) {
                if(err) return reject({err, message:'error while write file'});
                resolve('Successfully saved');
            })
        })
    })
}

lib.delete = (dir, file, data) => {
    return new Promise((resolve, reject) => {
        let filePath = path.join(basePath, dir,`${file}.json`);
        console.log('filePath', filePath);
        fs.unlink(filePath, function(err) {
            if(err || !fd) return reject({err});
            resolve('Successfully saved');
        })
    })
}
module.exports = lib;