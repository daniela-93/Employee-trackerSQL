DROP DATABASE IF EXISTS tracker_db;
CREATE DATABASE tracker_db;
USE tracker_db;

CREATE TABLE department(
  dept_name VARCHAR(30) UNIQUE NOT NULL
);
CREATE TABLE roles(
 title VARCHAR(30)  NOT NULL,
salary DECIMAL NOT NULL,
department_id INTEGER NOT NULL

);
CREATE TABLE employee(
 
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
   role_id INTEGER ,
   manager_id INTEGER NULL
);
