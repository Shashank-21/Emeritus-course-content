Your task now is to implement the `analyzeData` funtion:
Purpose: This function is a flexible tool to apply various analyses to each student's grades and gather the results efficiently.

Input: The function expects two arguments:

- `students`: An array of objects representing each student. Each object should contain relevant information, including an array of named grades containing their grades.
- `analysisFunction`: A user-defined function that takes an array of grades as input and performs a specific analysis.

Output: The function returns an array containing the analysis results applied to each student's grades.

Logic:

- Initialize an empty array `results` to store the analysis results for each student.
- Iterate through each student object in the `students` array using a loop.
- For each student, extract the `grades` array from the object.
- Call the provided `analysisFunction` with the student's `grades` array as an argument, invoking the custom analysis defined by the user.
  Example:

```js
const result = analysisFunction(student.grades);
```

- Take the return value of the `analysisFunction` (representing the analysis result for the current student) and add it to the `results` array, storing the analysis results for each student individually.

```js
results.push(result); // result had been defined earlier.
```

- After iterating through all of the students, the `results` array will contain the analysis results for each student in the order they appear in the array.
- Return the `results` array, providing the user with the complete analysis data for all of the students.

Refresh the web page, and select each button to test your code.
