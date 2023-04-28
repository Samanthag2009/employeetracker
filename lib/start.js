const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('../db/connection');
//TODO: bring in specific queries for department
const { selectDepartment, addDepartment, appendDepartment, deleteDepartmentQ, deleteDepartmentA, departmentBudget } = require('./department'); 
const { error } = require('console');
//TODO: bring in specific queries for employee
const { selectEmployee, addEmployee, appendEmployee } = require('./employee');
//TODO: bring in specific queries for role


//Main Menu Function that shows starting choices for the user

const startProgram = () => {

     inquirer.prompt ([
        {
            type: 'list',
            name: 'startChoice',
            message: "What can I help with?",
            choices: [
                {
                    name: 'View All Departments',
                    value: 1
                },
                {
                    name: 'View All Roles',
                    value: 2
                },
                {
                    name: 'View All Employees',
                    value: 3
                },
                {
                    name: 'Add A Department',
                    value: 4
                },
                {
                    name:'Add A Role',
                    value: 5
                },
                {
                    name: 'Add An Employee',
                    value: 6
                },
                {
                    name:'Update Employee Role',
                    value: 7
                },
                { 
                    name: 'Update Employee Manager',
                    value: 8
                },
                {
                    name: 'View Employees by Manager',
                    value: 9
                },
                {
                    name: 'View Employees by Department',
                    value: 10
                },
                {
                    name: 'Delete a Department',
                    value: 11
                }, 
                {
                    name: 'Delete a Role',
                    value: 12
                },
                {
                    name: 'Delete an Employee',
                    value: 13
                },
                {
                    name:'View Utilized Budget of a Department',
                    value: 14
                },
                {
                    name: 'Goodbye!',
                    value: 15
                }
                
            ]
        }
    ])



//TODO: define viewAll with sql query

const viewAll = (viewSql) => {
    db.query(viewSql, (error, result) => console.table(result));
}

//TODO: .then function for viewing choices
// Case breaks

startNav = () => {
    inquirer.prompt(startProgram)
        .then(answer => {
            //Choice value that corresponds to case, triggering respective functions
            switch(answer.startChoice) {
                case 1:
                    //View departments
                    {viewAll(selectDepartment())}
                    break;
                case 2:
                    //view all roles choice
                    break;
                case 3:
                    //view all employees function
                    selectEmployee
                    break;
                case 4:
                    //Add department functions
                    addDepartment,
                    appendDepartment
                    break;
                case 5:
                    //add role function
                    break;
                case 6:
                    // add employee function
                    addEmployee,
                    appendEmployee
                    break;
                case 7: 
                    // update employee role function
                    break;
                case 8:
                    // update employee manager function
                    break;
                case 9:
                    //view employees by manager function
                    break;
                case 10:
                    //view employees by department function
                    break;
                case 11:
                    //delete a department functions
                    deleteDepartmentQ,
                    deleteDepartmentA
                    break;
                case 12:
                    //delete a role function
                    break;
                case 13:
                    //delete an employee function
                    break;
                case 14:
                    //view budget function
                    break;
                case 15:
                    //end program function
                    break;
                


                

            }

        })



} 
// .then (({ startChoice }) => {





//     if (startChoice === 'View All Departments') {viewAll(selectDepartment)}
//     // if (startChoice === 'View All Roles')
//     // if (startChoice === 'View All Employees')
//     if (startChoice === 'Add A Department') {viewAll(addDepartment, appendDepartment)}
//     // if (startChoice === 'Add A Role') {viewAll()}
//     // if (startChoice === 'Add An Employee') {viewAll()}
//     // if (startChoice === 'Update Employee Role') {viewAll()}
//     // if (startChoice === 'Update Employee Manager') {viewAll()}
//     // if (startChoice === 'View Employees by Manager') {viewAll()}
//     // if (startChoice === 'View Employees by Department') {viewAll()}
//     if (startChoice === 'Delete a Department') {viewAll(deleteDepartmentA, deleteDepartmentQ)}
//     // if (startChoice === 'Delete a Role') {viewAll()}
//     // if (startChoice === 'Delete an Employee') {viewAll()}
//     if (startChoice === 'View Utilized Budget of a Department') {viewAll(departmentBudget)}
//     // if (startChoice === 'Goodbye') {viewAll()}


// })
// //TODO: define viewAll with sql query

// const viewAll = (viewSql) => {
//     db.query(viewSql, (error, result) => console.table(result));
// }

//TODO: function for add

//TODO: function for update

//TODO: function for remove

//TODO: add function for goodbye



}

module.exports = startProgram;




//module.exports = mainMenu;