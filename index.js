//require DB connection 
const { throwError } = require("rxjs");
const db = require("./db/connection");

//connect function
db.connect(error => {
    if (error) throw error;
});

//TODO: launch program