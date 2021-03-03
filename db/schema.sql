CREATE TABLE employees (
  id INTEGER PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id BOOLEAN NOT NULL,
  manager_id BOOLEAN NOT NULL 
);