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

connection.connect(function(err) {
  if (err) {
      console.log('Error connecting to DB');
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
