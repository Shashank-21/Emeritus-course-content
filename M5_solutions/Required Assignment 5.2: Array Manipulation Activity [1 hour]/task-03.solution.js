// Your code here
function removeStudentByName(students, name) {
  let studentIndex = -1;
  for (let i = 0; i < students.length; i++) {
    if (students[i].name === name) {
      studentIndex = i;
      break;
    }
  }
  if (studentIndex === -1) {
    return `Student named ${name} not found!`;
  } else {
    const removedStudent = students.splice(studentIndex, 1);
    return removedStudent;
  }
}

// Don't change this line:
if (typeof module !== "undefined") {
  module.exports = {
    removeStudentByName,
  };
}
