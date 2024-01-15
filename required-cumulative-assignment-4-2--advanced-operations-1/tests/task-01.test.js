const path = require("path");
const { calculateAverageGrade } = require(path.resolve(
  __dirname,
  "../task-01/task-01.js"
));

const { faker } = require("@faker-js/faker");

const generateRandomStudents = () => {
  const students = [];
  for (let i = 0; i < 5; i++) {
    const name = faker.person.fullName();
    const grades = [];
    for (let j = 0; j < 4; j++) {
      grades.push(Math.floor(Math.random() * 100) + 1);
    }
    students.push({
      name,
      grades,
    });
  }
  return students;
};

describe("Student Analysis Functions", () => {
  describe("calculateAverageGrade", () => {
    test("should return the correct average grade", () => {
      const students = generateRandomStudents();
      students.forEach((student, index) => {
        const averageGrade = calculateAverageGrade(student.grades);
        const expectedAverage =
          student.grades.reduce((sum, grade) => sum + grade, 0) /
          student.grades.length;
        try {
          expect(averageGrade).toBeCloseTo(expectedAverage, 2);
        } catch (error) {
          throw new Error(
            `Expected average grade: ${expectedAverage}, got: ${averageGrade}, at index${index}`
          );
        }
      });
    });
  });
});
