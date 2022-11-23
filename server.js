const mysql = require('mysql2');
const inquirer = require('inquirer')


// Returns an object of some sort that will represent the refrence to the database. -- connect to db 
const employee_db = mysql.createConnection (
    {
        host: 'localhost',
        
        user: 'root',

        password: 'password',

        database: 'employee_db'
    },

    console.log(`Connected to employee_db database.`)
);

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
   .then( )