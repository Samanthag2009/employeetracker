/*Create and use new database*/

DROP DATABASE IF EXISTS employee_tracker; 

CREATE DATABASE employee_tracker;

USE employee_tracker;

/*Create Department Table*/
  
CREATE TABLE department (
    id INT NOT NULL PRIMARY KEY NOT NULL,
    department_name VARCHAR(30) NOT NULL
);

/*Create Role Table*/

CREATE TABLE role (
    id INT NOT NULL PRIMARY KEY NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL
);

/*Create Employee Table*/

CREATE TABLE employee (
    id INT NOT NULL PRIMARY KEY NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT
);