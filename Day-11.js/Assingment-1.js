// Create an employee object
let employee = {
    name: "Pratiksha Shinde",
    age: 26,
    email: "pratiksha@gmail.com",
    city: "Solapur",
    department: "Finance",
    salary: 50000
};

// 1. Print all values
console.log("Employee Details:");
console.log(employee);

// Print each value
for (let key in employee) {
    console.log(key + ":", employee[key]);
}


// 2. Update salary
employee.salary = 60000;

console.log("Updated Salary:");
console.log(employee.salary);


// 3. Add experience
employee.experience = "3 Years";

console.log("After Adding Experience:");
console.log(employee);


// 4. Delete one property
delete employee.city;

console.log("After Deleting City:");
console.log(employee);