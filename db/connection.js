const mysql = require('mysql2');

//Connect to database

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Downey2016!',
    database: 'employee_tracker'

},
console.log('Connected to Employee Tracker Database')
);

module.exports = db;