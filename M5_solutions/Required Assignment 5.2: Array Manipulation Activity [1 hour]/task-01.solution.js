// Your code here
function addStudent(students, id, name, age, grade) {
  const student = { id: id, name: name, age: age, grade: grade };
  students.push(student);
}

// Don't change this line:
if (typeof module !== "undefined") {
  module.exports = {
    addStudent,
  };
}
