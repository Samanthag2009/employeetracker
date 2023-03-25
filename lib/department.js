//connect to database
const db = require('../db/connection');

//TODO: queries specific to department table
//View All Departments
const selectDepartment = `SELECT * FROM department`;

//Add Department
const addDepartment = [{
    type: 'input',
    name: 'deptName',
    message: 'New Department Name?'
}];

const appendDepartment = (({deptName}) => {
    const mysql = `INSERT INTO department (name) VALUES (?)`;
    const params = deptName;
    db.query(mysql, params, (error, response) => {});
});

//Delete Department
const getDeptName = `
SHOW (name) FROM department
`;
const deleteDepartmentQ = [{
    type: 'list',
    name: 'deleteDepartment',
    message: 'Which Department would you like to delete?',
    choices: ''
    //TODO present department names 
}];

//View Utilized Budget of a Department