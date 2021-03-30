DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS department;

CREATE TABLE department (
  dept_name VARCHAR(30) UNIQUE NOT NULL
);
CREATE TABLE roles (
 title VARCHAR(30)  NOT NULL,
salary DECIMAL NOT NULL,
department_id INTEGER NOT NULL

);
CREATE TABLE employees (
 
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
   role_id INTEGER PRIMARY KEY,
   manager_id INTEGER NULL
);