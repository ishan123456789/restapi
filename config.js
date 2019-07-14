/**
 * NODE_ENV=production||staging||deveopment node index.js
 */

let environment = {};

environment.staging = {
    envName: "Staging",
    httpPort: 3000,
    httpsPort: 3001
}

environment.production = {
    envName: "Production",
    httpPort: 4000,
    httpsPort: 4001
}

environment.development = {
    envName: "Development",
    httpPort: 5000,
    httpsPort: 5001
}

let currentEnv = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
let toExportEnv = environment[currentEnv] ? environment[currentEnv] : environment['development'];

module.exports = toExportEnv;