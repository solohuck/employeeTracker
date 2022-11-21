const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer')

const PORT = process.env.PORT || 3001;
const app = express(); 

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Returns an object of some sort that will represent the refrence to the database.
const db = mysql.createConnection (
    {
        host: 'localhost',
        
        user: 'root',

        password: 'password',

        database: 'employee_db'
    },

    console.log(`Connected to employee_db database.`)
);

// Query database. Pass in the query as a sting 
db.query('SELECT * FROM employees', function (err, results){
    console.log(results);
});

// Gives error code for incorrect request.
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


inquirer
    .prompt([
        {
            type: 'list',
            name: 'task',
            message: 'Choose one of the following.',
            choices: 
        [
            'view all departments', 
            'view all roles', 
            'view all employees', 
            'add a department', 
            'add a role', 
            'add an employee', 
            'update an employee role'
        ]},
    ])
   