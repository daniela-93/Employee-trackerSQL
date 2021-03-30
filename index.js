const mysql = require("mysql2");

const cTable = require("console.table");
const inquirer = require("inquirer");

// Creates the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  // Your MySQL username
  user: 'root',
  // Your MySQL password
  password: '1234abcd',
  database: 'tracker_db'
});

connection.connect (function(err) {
  if (err) {
  console.log("Connected!");
  return;
}
console.log(`
----------------
EMPLOYEE TRACKER
----------------
`);
promptMenu();
});
  


function promptMenu() {
  // main menu user prompt options, called after most functions 
  inquirer.prompt([
      {
          type: 'list',
          name: 'menu',
          message: 'What would you like to do?',
          choices: [
              'View All Employees',
              'View All Roles',
              'View All Departments',
              'Add Department',
              'Add Role',
              'Add Employee',
              'Update Employee',
              'Update Employee Manager',
              'Remove Employee',
              'Remove Department',
              'Remove Role'
          ]
      }
  ])
  .then((answer) => {
      // switch case depending on user choice to run specific function
      switch (answer.menu) {
          case 'View All Employees':
              viewEmployees();
              break;
          case 'View All Roles':
              viewRoles();
              break;
          case 'View All Departments':
              viewDepartments();
              break;
          case 'Add Department':
              addDepartment();
              break;
          case 'Add Role':
              addRole();
              break;
          case 'Add Employee':
              addEmployee();
              break;
          case 'Update Employee':
              updateEmployee();
              break;
          case 'Update Employee Manager':
              updateManager();
              break;
          case 'Remove Employee':
              deleteEmployee();
              break;
          case 'Remove Department':
              deleteDepartment();
              break;
          case 'Remove Role':
              deleteRole();
              break;
      }
  })
};
// function view table of alll employees //

function viewEmployees() {
  const sql = "SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name AS department, CONCAT(e.first_name, ' ', e.last_name) AS manager FROM employee INNER JOIN role ON role.id = employee.role_id INNER JOIN department ON department.id = role.department_id LEFT JOIN employee e ON employee.manager_id = e.id;";
  connection.query(sql, (err, res) => {
      if (err) throw err;
      console.table(res);
      promptMenu();
  });
};

// function to view table of all roles
function viewRoles() {
    const sql = "SELECT role.id, role.title, role.salary, department.name AS department FROM role INNER JOIN department ON role.department_id = department.id;";
    connection.query(sql, (err, res) => {
        if (err) throw err;
        console.table(res);
        promptMenu();
    });
};

// function to view table of all departments
function viewDepartments() {
    const sql = "SELECT * FROM department;";
    connection.query(sql, (err, res) => {
        if (err) throw err;
        console.table(res);
        promptMenu();
    });
};