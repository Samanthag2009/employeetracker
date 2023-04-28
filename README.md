# Employee Tracker

The Employee Tracker is a useful way to keep up with employees within a company or job site. This application not only tracks the information, but grows with your company by allowing users to delete, add, or edit employees, departments and roles.

This version is an in-progress work that upon future release, will include functionality to interact beyond the main menu.

## Description

The Employee Tracker is the product of Sequelize, Inquirer, console.table and more. Therefore, this application can be run right from your terminal. With Inquierer functions to make manipulating the information in this application user-friendly, console.table, Sequqlize and JavaScript bring the app to life on the "back-end."

## Getting Started

To begin the application, simply enter `node index.js` in your terminal and press "Enter"
This generates the Start Menu.
![NPMCommand](/images/npmrunstart.png "Start command")

From here, you have a list of choices having to do with departments, roles, and employees within the company.
![Menu](/images/menu.png "Start Menu")


### The below is a template for future version release that outlines the full scope of what this app will achieve.

You can view all departments, roles or employees,
(SS)

add a department, role or employee,
(SS)

update an employee role or manager,
(SS)

delete a department, role or employee,
(SS)

view employees by manager or department,
(SS)

(Extra)
and even view the budget spendings on salaries for a given department.
(SS)

All of these choices are ones that will query and manipulate our database with the respective functionality.

(extra)
When you are done, and are returned to the main menu, you can simply select "Goodbye" to exit the application.

## Challenges

The main challenge within The Employee Tracker was "linking" the SQL database to the start menu. 
![UhOh|100x100](/images/error.png "Where did my choices go?🤔")


As you can see, the table of departments is accessible and not empty. 
![Table, 5%](/images/table.png "The table exists!")

The following is the code for displaying the values from this table in the terminal-based UI, followed by an image of the corresponding Start Menu code. 
![DepartmentJS](/images/departmentcode.png)
![StartCode1](/images/startcode1.png)
![StartCode2](/images/startcode2.png)

I suspect a syntax error or improper input in "department.js"

Without this menu rendering one option, it was difficult to continue with the other options, as the methods may very well be incorrect.
My suspicion is that once this error is dealt with, the rest of the project will be infinitely more clear in direction.

## Victories

As pictured above, the SQL database for the employee tracker is fully functional, as is the node command to begin the application. I have found myself comfortable with SQL, and look forward to expanding on this.

## Walkthrough Video for Version 1
https://drive.google.com/file/d/1YAqa13lfM7SDQ7oMsH7Xm8ze6rFVPDWw/view

### Dependencies

* inquirer
* express
* console.table
* mysql2

## Authors

Samantha Gosselin

## Version History

* 0.1
    * Initial Release


## Acknowledgments

Inspiration, code snippets, etc.
* [awesome-readme](https://github.com/matiassingers/awesome-readme) 
