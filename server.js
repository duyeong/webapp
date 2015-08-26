var __dirname = './';
var connect = require('connect');
var serveStatic = require('serve-static');

connect().use(serveStatic(__dirname)).listen(8080);
console.log("Thanks, Jokum. Server has been launched successfully~")
