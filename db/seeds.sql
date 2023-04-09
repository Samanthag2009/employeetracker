/* Create Insert Information for Department id and name */

INSERT INTO department (department_name) 
VALUES ('Magic Spells'),
       ('Evil Plans'),
       ('World Domination'),
       ('Forbidden Knowledge'),
       ('Human Resources');


/* Create Insert Information for Role id, title, salary and department_id */

INSERT INTO role (title, salary, department_id)
VALUES ('Mastermind', 500000, 1),
       ('Wizard', 100000, 2),
       ('Politician', 900000, 3),
       ('Lich', 700000, 4),
       ('Human Resources Employee', 60000, 5);

/* Create Insert Information for Employee id, first_name, last_name, role_id and manager_id */

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Agoth', 'the Terrible', 4, 111),
       ('John', 'Rogers', 8, 222),
       ('Kevin', 'Brown', 5, 333),
       ('Lindsey', 'Jenkins', 2, 444),
       ('Arcadia', 'Zelfor', 1, 555);