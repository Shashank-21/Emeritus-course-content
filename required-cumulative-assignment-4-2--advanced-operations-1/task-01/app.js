import { faker } from "https://cdn.skypack.dev/@faker-js/faker";

function analyzeData(students, analysisFunction) {
  const results = [];
  for (const student of students) {
    results.push(analysisFunction(student.grades));
  }
  return results;
}

const studentsTable = document.getElementById("student-card");
const analysisResults = document.getElementById("analysis-results");
const errorMessage = document.getElementById("error-message");

const calculateAverageGradeClone =
  typeof calculateAverageGrade === "undefined" ? null : calculateAverageGrade;

let students;

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
  updateStudentsTable(students);
  return students;
};

const updateStudentsTable = (students) => {
  studentsTable.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Grade 1</th>
          <th>Grade 2</th>
          <th>Grade 3</th>
          <th>Grade 4</th>
        </tr>
      </thead>
      <tbody>
        ${students
          .map(
            (student) => `
            <tr>
              <td>${student.name}</td>
              <td>${student.grades[0]}</td>
              <td>${student.grades[1]}</td>
              <td>${student.grades[2]}</td>
              <td>${student.grades[3]}</td>
            </tr>
          `
          )
          .join("")}
      </tbody>
    </table>
  `;
};

const analyzeStudents = (students, analysisFunction) => {
  const results = analyzeData(students, analysisFunction);
  updateAnalysisResults(students, results, analysisFunction);
};

const wrappedAnalyzeStudents = (students, analysisFunction) => {
  if (analysisFunction !== null && typeof analyzeData !== "undefined") {
    analyzeStudents(students, analysisFunction);
  } else {
    showError("Missing required functions!");
    return;
  }
};

const updateAnalysisResults = (students, results, analysisFunction) => {
  analysisResults.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>${
            analysisFunction === calculateAverageGrade
              ? "Average Grade"
              : analysisFunction === findMaxGrade
              ? "Max Grade"
              : "Min Grade"
          }</th>
        </tr>
      </thead>
      <tbody>
        ${students
          .map(
            (student, index) => `
            <tr>
              <td>${student.name}</td>
              <td>${results[index]}</td>
            </tr>
          `
          )
          .join("")}
      </tbody>
    </table>
  `;
};

const showError = (message) => {
  errorMessage.textContent = message;
  errorMessage.classList.remove("hidden");
};

document.getElementById("generate-students").addEventListener("click", () => {
  students = generateRandomStudents();
  errorMessage.classList.add("hidden");
});

document
  .getElementById("calculate-average")
  .addEventListener("click", () =>
    wrappedAnalyzeStudents(students, calculateAverageGradeClone)
  );
