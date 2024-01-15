function calculateAverageGrade(grades) {
  let total = 0;
  for (const grade of grades) {
    total += grade;
  }
  const average = total / grades.length;
  return average;
}

// Your code here
function analyzeData(students, analysisFunction) {
  const results = [];
  for (const student of students) {
    const result = analysisFunction(student.grades);
    results.push(result);
  }
  return results;
}

// Don't change this line of code:
if (typeof module !== "undefined") {
  module.exports = {
    analyzeData,
    calculateAverageGrade,
  };
}
