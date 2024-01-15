const fs = require("fs");
const path = require("path");

const jsonFilePath = path.resolve(__dirname, "test-results-1.json");
describe("Testing string-utils.test.js", () => {
  let testResults;
  const errors = [];

  beforeAll(async () => {
    const rawTestResults = fs.readFileSync(jsonFilePath, "utf8");
    testResults = JSON.parse(rawTestResults);
  });

  test("The total number of test cases should be 1", () => {
    try {
      expect(testResults.numTotalTests).toBe(1);
    } catch (error) {
      errors.push("Have you removed any of the tests?");
    }
  });

  test("The number of test cases that pass should be 1", () => {
    try {
      expect(testResults.numPassedTests).toBe(1);
    } catch (error) {
      errors.push(
        "Check the test cases or the code in string-utils.js file, not all test cases are passing."
      );
    }
  });

  test("The result for each function should be 'passed'", () => {
    const expectedTestCaseResults = [
      "The function 'isPalindrome' should check for palindromes correctly - passed",
    ];

    const functions = ["isPalindrome"];

    const actualTestCaseResults =
      testResults.testResults[0].assertionResults.map(
        (item) => `${item.title} - ${item.status}`
      );
    actualTestCaseResults.forEach((item, index) => {
      try {
        expect(item).toBe(expectedTestCaseResults[index]);
      } catch (error) {
        errors.push(
          `The function implementation for '${functions[index]}' is not correct, or the test code has an error. Please check for the function '${functions[index]}' in string-utils.js file and its test case in string-utils.test.js file.`
        );
      }
    });
  });

  afterAll(() => {
    if (errors.length) {
      console.log(errors.join("\n"));
      process.exit(1);
    }
  });
});
