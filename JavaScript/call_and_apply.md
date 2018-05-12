## Call and Apply

````
var College = function (name, code, address) {
  this.collegeName = name;
  this.collegeCode = code;
  this.collegeAddress = address;
};

var Lecture = function (name, code, address, department, salary) {
  this.department = department;
  this.salary = salary;
  console.log("Lecture", this);
  College.call(this, name, code, address);
  console.log("Lecture", this);
};

var lecture = new Lecture("IIMB", "IIM01", "Bengaluru", "CSc", 30000);
console.log(lecture);

var Student = function (name, code, address, department, semester) {
  this.department = department;
  this.semester = semester;
  console.log("Student", this);
  College.bind(this, [name, code, address]);
  console.log("Student", this);
};

var student = new Student("IIMB", "IIM01", "Bengaluru", "CSc", "4th Sem");
console.log(student);
````
