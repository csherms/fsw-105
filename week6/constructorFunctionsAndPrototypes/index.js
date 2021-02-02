let employees = [];
function Employee(Name, JobTitle, Salary, Status = "Full Time"){
    this.Name = Name;
    this.JobTitle = JobTitle;
    this.Salary = Salary;
    this.Status = Status;
}

function printEmployeeForm(Employee){
        console.log(`${Employee.Name} is a ${Employee.JobTitle} making ${Employee.Salary} dollars per hour, and works ${Employee.Status}.`);
}

let employee1 = new Employee('Bob', 'Bartender', 15);
let employee2 = new Employee('Zach', 'Web Developer', 5000, Employee.Status = "Part Time");
let employee3 = new Employee('Doug', 'Salesman', 5);

printEmployeeForm(employee1);
printEmployeeForm(employee2);
printEmployeeForm(employee3);
employees.push(employee1.Name, employee2.Name, employee3.Name);
console.log(employees);