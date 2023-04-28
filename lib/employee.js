//connect to database
const db = require('../db/connection');

//TODO: queries specific to employee table

//View All Employees
const selectEmployee = `SELECT * FROM employee`

//Add An Employee
const addEmployee = [
    {
    type: 'input',
    name: 'employee_id',
    message: "What is employee's id number?"
    },
    {
    type: 'input',
    name: 'first_name',
    message: "What is employee's first name?"
    },
    {
    type: 'input',
    name: 'last_name',
    message: "What is employee's last name?"
    },
    {
    type: 'list',
    name: 'role',
    message: "What is this employee's role?",
    choices: ['Mastermind', 'Politician', 'Lich', 'Human Resources Employee']
    },
    {
    type: 'confirm',
    name: 'has_manager',
    message: 'Does this employee have a manager?'
    },
    //only ask if employee has a manager
    {
    type: 'input',
    name: 'manager_id',
    message: 'What is the manager ID?',
    when: ({has_manager}) => {
        if (has_manager) {
            return true;
        } else {
            return false;
        }
        }        
    }

];

const appendEmployee = (({employee_id, first_name, last_name, role, manager_id}) => {
    const mysql = `INSERT INTO employee (employee_id, first_name, last_name, role, manager_id) VALUES (?, ? SELECT id FROM roles WHERE title = ?), ?) `;
    const params = [employee_id, first_name, last_name, role, manager_id];
    db.query(mysql, params, (error, response) => {});
});

//View Employees by Manager

const employeeByManager = 
`

`

//View Employees by Department
//Delete an Employee

module.exports = {
    selectEmployee,
    addEmployee,
    appendEmployee,

}