/**
 * NODE_ENV=production||staging||deveopment node index.js
 */

let environment = {};

environment.staging = {
    envName: "Staging",
    port: 3000
}

environment.production = {
    envName: "Production",
    port: 4000
}

environment.development = {
    envName: "Development",
    port: 5000
}

let currentEnv = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
let toExportEnv = environment[currentEnv] ? environment[currentEnv] : environment['development'];

module.exports = toExportEnv;