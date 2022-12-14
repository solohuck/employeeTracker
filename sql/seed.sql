USE employee_db;

INSERT INTO department (name, id)
VALUES ("Engineering", "2"),
       ("Finance", "3"),
       ("Legal", "4"),
       ("Sales", "1");

INSERT INTO role (title, id, department, salary)
VALUES ("Sales Lead", "1", "Sales", "100000"),
       ("Salesperson", "2", "Sales", "80000"),
       ("Lead Engineer", "3", "Engineering", "150000"),
       ("Software Engineer", "4", "Engineering", "120000"),
       ("Account Manager", "5", "Finance", "160000"),
       ("Accountant", "6", "Finance", "125000"),
       ("Legal Team Lead", "7", "Legal", "250000"),
       ("Lawer","8", "Legal", "190000");
    
INSERT INTO employee (id, first_name, last_name, title, department, salary, manager )
VALUES ("1","John","Doe", "Sales Lead", "Sales", "100000", "null"),
       ("2","Mike", "Chan", "Salesperson", "Sales", "80000", "John Doe"),
       ("3","Ashley", "Rodriguez", "Lead Engineer", "Engineering", "150000", "null"),
       ("4","Kevin", "Tupik", "Software Engineer", "Engineering", "120000", "Ashley Rodruguez"),
       ("5","Kunal", "Singh", "Account Manager", "Finance", "160000", "null"),
       ("6","Malia", "Brown", "Accountant", "Fiance", "125000", "Kunal Singh"),
       ("7","Sarah", "Lourd", "Legal Team Lead", "Legal", "250000", "null"),
       ("8","Tom", "Allen", "Lawyer", "Legal", "190000", "Sarah Lourd");
       