const inquirer = require('inquirer');
const db = require('../db/connection');
//TODO: bring in specific queries for department
//const { selectDepartment, addDepartment, appendDepartment, } 
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

//TODO: function for add

//TODO: function for update

//TODO: function for remove




}






//module.exports = mainMenu;