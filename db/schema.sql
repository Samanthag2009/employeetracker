/*Create and use new database*/

DROP DATABASE IF EXISTS employee_tracker; 

CREATE DATABASE employee_tracker;

USE employee_tracker;

DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS department;
/*Create Department Table*/
  
CREATE TABLE department (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT DEFAULT 0,
    department_name VARCHAR(30) NOT NULL
);

/*Create Role Table*/

CREATE TABLE role (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT DEFAULT 0,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT,
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL
);

/*Create Employee Table*/

CREATE TABLE employee (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT DEFAULT 0,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT REFERENCES employee,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE SET NULL
);