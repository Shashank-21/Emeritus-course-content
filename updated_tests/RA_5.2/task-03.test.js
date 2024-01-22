const path = require("path");
const { faker } = require("@faker-js/faker");
const { removeStudentByName } = require(path.resolve(
  __dirname,
  "task-03/task-03.js"
));

function generateRandomStudents() {
  const randomStudents = [];

  for (let i = 0; i < 5; i++) {
    const id = i + 1;
    const name = faker.person.fullName();
    const age = Math.floor(Math.random() * 10) + 20; // Random age between 20 and 29
    const grade = Math.floor(Math.random() * 50) + 50; // Random grade between 50 and 99

    const student = {
      id,
      name,
      age,
      grade,
    };
    randomStudents.push(student);
  }
  return randomStudents;
}

describe("Remove Student Test", () => {
  const students = generateRandomStudents();
  const initialLength = students.length;
  const studentToRemove = students[1];
  const removedStudent = removeStudentByName(students, studentToRemove.name);
  test("removeStudent should remove the right student from the students array", () => {
    try {
      expect(students.length).toBe(initialLength - 1);
      expect(
        students.some((student) => student.id === studentToRemove.id)
      ).toBeFalsy();
    } catch (error) {
      throw new Error(
        "Did you implement the `removeStudent` function correctly? Find the index where the student with the given name is located and use the `splice` function to remove the student."
      );
    }
  });
  test("removeStudent should remove the right student from the students array", () => {
    try {
      expect(studentToRemove).toEqual(removedStudent[0]);
    } catch (error) {
      if (!removedStudent[0]) {
        throw new Error(
          "Check the `studentToRemove` variable. It should contain the output of `students.splice(studentIndex,1)` and not the first element inside the result"
        );
      }
      throw new Error("The wrong student was removed.");
    }
  });
  const nonExistentStudentName = "NonexistentStudent";
  const nonExistentMessage = removeStudentByName(
    students,
    nonExistentStudentName
  );
  test("removeStudent should return a message when the student is not found", () => {
    try {
      expect(typeof nonExistentMessage).toBe("string");
    } catch (error) {
      throw new Error(
        "When the student's name is not there in the list of students, are you returning a string?"
      );
    }
  });
});
