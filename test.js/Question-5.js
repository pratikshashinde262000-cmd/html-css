const students = [
  { name: "Amit", marks: 45 },
  { name: "Riya", marks: 78 },
  { name: "Kunal", marks: 32 },
  { name: "Sneha", marks: 91 },
  { name: "Rahul", marks: 55 }
];

const passedStudents = students
  .filter(student => student.marks >= 50)
  .map(student => student.name);

console.log(passedStudents);