//connect to database
const db = require('../db/connection');

//Queries specific to department table


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
SHOW (name) FROM department`;
const deleteDepartmentQ = [{
    type: 'list',
    name: 'deleteDepartment',
    message: 'Which Department would you like to delete?',
    choices: ['Magic Spells', 'Evil Plans', 'World Domination', 'Forbidden Knowledge', 'Human Resources']
}];

const deleteDepartmentA = (({destroyDepartment}) =>{
    const sql = `DELETE FROM department WHERE department_name = ?`;
    const params = [destroyDepartment];
    db.query(sql, params, (error, response) => {});

}

)

//TODO View Utilized Budget of a Department
const departmentBudget = 
// `SELECT department.name AS department, SUM(roles.salary) AS cost FROM employee`

module.exports = {
    selectDepartment,
    addDepartment,
    appendDepartment,
    getDeptName,
    deleteDepartmentQ,
    deleteDepartmentA,
    departmentBudget
}