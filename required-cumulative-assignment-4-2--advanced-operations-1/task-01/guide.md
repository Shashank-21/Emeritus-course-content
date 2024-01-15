Your task is to implement the `calculateAverageGrade(grades)` function in the code using these instructions:

Purpose: This function calculates the central tendency of a student's performance by taking the average individual grades.

Input: The function expects an array of numerical values representing the student's grades.

Output: The function returns a single numerical value representing the average grade.

Logic:

- Define a variable `total` to accumulate the sum of all of the grades. Assign a value of `0` to this variable.
- Iterate through each grade in the `grades` array using a loop.
- In the loop, add each grade to the `total` variable. This can be done by the `+=` operator.
  Example:
  ```js
  let x = 4;
  let y = 5;
  y += x; // Adds the value of x to y, so the updated value of y is now 9
  ```
- After iterating through all of the grades, calculate the average by dividing the `total` by the number of elements in the `grades` array. The number of elements in the `grades` array can be obtained by using the `length` property.
- Return the calculated average grade.

Refresh the web page, and select each button to test your code.
