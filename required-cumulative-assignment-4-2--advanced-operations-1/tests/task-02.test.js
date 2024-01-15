const path = require("path");
const { calculateAverageGrade, analyzeData } = require(path.resolve(
  __dirname,
  "../task-02/task-02.js"
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

  describe("analyzeData", () => {
    test("should apply the provided analysis function to each student", () => {
      const students = generateRandomStudents();
      const averageGrades = analyzeData(students, calculateAverageGrade);
      try {
        expect(averageGrades.length).toBe(students.length);
      } catch (error) {
        throw new Error(
          `Expected average grades to have ${students.length} elements. Got ${averageGrades.length} instead`
        );
      }
      students.forEach((student, index) => {
        const { grades } = student;
        try {
          const expectedAverageGrade =
            grades.reduce((a, b) => a + b, 0) / grades.length;
          expect(expectedAverageGrade).toBeCloseTo(averageGrades[index]);
        } catch (error) {
          throw new Error(
            `Expected average grade to be close to  ${expectedAverageGrade}, got ${averageGrades[index]}`
          );
        }
      });
    });
  });
});
