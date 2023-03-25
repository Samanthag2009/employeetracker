const mysql = require('mysql2');

//Connect to database

const db = mysql.createConnection({
    host: 'localhost',
    user: rootCertificates,
    password: 'Downey2016!',
    database: 'employee_tracker'

});

module.exports = db;