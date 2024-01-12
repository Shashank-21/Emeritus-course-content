const path = require("path");
const { faker } = require("@faker-js/faker");
const { removeStudent } = require(path.resolve(
  __dirname,
  "../task-02.solution.js"
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

describe("Remove Student Test - first", () => {
  const students = generateRandomStudents();
  const initialLength = students.length;
  const studentToRemove = students[0];
  const removedStudentFirst = removeStudent(students, "first");
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
      expect(studentToRemove).toEqual(removedStudentFirst);
    } catch (error) {
      throw new Error("The wrong student was removed");
    }
  });
  const nonExistentStudentName = "NonexistentStudent";
  const nonExistentMessage = removeStudent(students, nonExistentStudentName);
  test("removeStudent should return a message when the student is not found", () => {
    try {
      expect(typeof nonExistentMessage).toBe("string");
    } catch (error) {
      throw new Error(
        "When the student's order is not valid, are you returning a string?"
      );
    }
  });
});
describe("Remove Student Test - last", () => {
  const students = generateRandomStudents();
  const initialLength = students.length;
  const studentToRemove = students[initialLength - 1];
  const removedStudentLast = removeStudent(students, "last");
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
      expect(studentToRemove).toEqual(removedStudentLast);
    } catch (error) {
      throw new Error("The wrong student was removed");
    }
  });
});
