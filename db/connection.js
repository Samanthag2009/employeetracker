const mysql = require('mysql2');

//Connect to database

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Downey2016!',
    database: 'employee_tracker'

},
console.log('Connected to Employee Tracker Database')
);

module.exports = db;