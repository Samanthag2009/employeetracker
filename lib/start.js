const inquirer = require('inquirer');
const db = require('../db/connection');
//TODO: bring in specific queries for department
//const { selectDepartment, addDepartment, appendDepartment, deleteDepartment } 
//TODO: bring in specific queries for employee
//TODO: bring in specific queries for role

//Main Menu Function that shows starting choices for the user

const mainMenu = () => {

    inquirer.prompt ([
        {
            type: 'list',
            name: 'startChoice',
            message: "What can I help with?",
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add A Department',
                'Add A Role',
                'Add An Employee',
                'Update Employee Role',
                'Update Employee Manager',
                'View Employees by Manager',
                'View Employees by Department',
                'Delete a Department',
                'Delete a Role',
                'Delete an Employee',
                //'View Utilized Budget of a Department'
            ]
        }
    ])


//TODO: .then function for viewing choices
.then (({ startChoice }) => {
    // if (startChoice === 'View All Departments') {viewAll(selectDepartment)}
    // if (startChoice === 'View All Roles')
    // if (startChoice === 'View All Employees')
    // if (startChoice === 'Add A Department') {viewAll(addDepartment, appendDepartment)}
    // if (startChoice === 'Add A Role') {viewAll()}
    // if (startChoice === 'Add An Employee') {viewAll()}
    // if (startChoice === 'Update Employee Role') {viewAll()}
    // if (startChoice === 'Update Employee Manager') {viewAll()}
    // if (startChoice === 'View Employees by Manager') {viewAll()}
    // if (startChoice === 'View Employees by Department') {viewAll()}
    // if (startChoice === 'Delete a Department') {viewAll(deleteDepartment)}
    // if (startChoice === 'Delete a Role') {viewAll()}
    // if (startChoice === 'Delete an Employee') {viewAll()}
    // if (startChoice === 'View Utilized Budget of a Department') {viewAll()}
})
//TODO: define viewAll with sql query

//TODO: function for add

//TODO: function for update

//TODO: function for remove




}






//module.exports = mainMenu;