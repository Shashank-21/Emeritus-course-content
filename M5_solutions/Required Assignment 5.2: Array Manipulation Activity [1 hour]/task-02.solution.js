// Task 2 - Remove first or last student

// Your code here
function removeStudent(students, order) {
  let removedStudent;
  switch (order) {
    case "first":
      removedStudent = students.shift();
      return removedStudent;
    case "last":
      removedStudent = students.pop();
      return removeStudent;
    default:
      return "Invalid order string";
  }
}

// Don't change this line
if (typeof module !== "undefined") {
  module.exports = {
    removeStudent,
  };
}
