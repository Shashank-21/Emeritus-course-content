// Your code here
function reorderStudent(students, studentName, newIndex) {
  if (newIndex >= students.length) {
    return "The new index " + newIndex + " is out of the limits of the array";
  }
  if (students[newIndex].name === studentName) {
    return "The student '" + studentName + "' is already at index " + newIndex;
  }
  let originalIndex = 0;
  let studentToReorder = null;
  for (let i = 0; i < students.length; i++) {
    if (students[i].name === studentName) {
      studentToReorder = students[i];
      originalIndex = i;
      break;
    }
  }
  if (!studentToReorder) {
    return (
      "The student with name '" +
      studentName +
      "' is not present in the array of students"
    );
  }
  students.splice(originalIndex, 1);
  students.splice(newIndex, 0, studentToReorder);
  return studentToReorder;
}

// Don't change this line
if (typeof module !== "undefined") {
  module.exports = {
    reorderStudent,
  };
}
