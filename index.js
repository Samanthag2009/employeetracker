//require DB connection 
const { throwError } = require("rxjs");
const db = require("./db/connection");
const cTable = require('console.table');
const startProgram = require('./lib/start');

//connect function
db.connect(error => {
    if (error) throw error;
});

//TODO: launch program

module.exports = startProgram;