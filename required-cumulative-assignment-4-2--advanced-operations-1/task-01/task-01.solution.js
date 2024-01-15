// Your code here
function calculateAverageGrade(grades) {
  let total = 0;
  for (const grade of grades) {
    total += grade;
  }
  const average = total / grades.length;
  return average;
}

// Don't change this line of code:
if (typeof module !== "undefined") {
  module.exports = {
    calculateAverageGrade,
  };
}
