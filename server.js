const mysql = require('mysql2');
const inquirer = require('inquirer')
employee_db = require(mysql.createConnection);

// Query database. Pass in the query as a sting 
employee_db.query('SELECT * FROM employees', function (err, results){
    console.log(results);
});


inquirer
    .prompt([
        {
            type: 'list',
            name: 'task',
            message: 'Choose one of the following.',
            choices: 
        [
            'view all departments', // 'SELECT * FROM all departments' 
            'view all roles', 
            'view all employees', 
            'add a department', 
            'add a role', 
            'add an employee', 
            'update an employee role'
        ]},
    ])
   // need to add .then 
   .then((response) => {
        switch (response.optionOne) {
            case 'view all departments':
                viewAllDepartments();
                break;
            case 'view all roles':
                viewAllRoles();
                break;
            case 'vire all employees':
                viewAllEmployees();
                break;
            case 'add a departmet':
                addDepartment();
                break;
            case 'add a role':
                addRole();
                break;
            case 'add an employee':
                addEmployee();
                break;
            case 'update an employee role':
                updateEmployeeRole();
                break;
            case 'finished':
                employee_db.end();
                break;
        }
   })