const fs = require("fs");
const path = require("path");

const jsonFilePath = path.resolve(__dirname, "test-results.json");
describe("Testing string-utils.test.js", () => {
  let testResults;
  const errors = [];

  beforeAll(async () => {
    const rawTestResults = fs.readFileSync(jsonFilePath, "utf8");
    testResults = JSON.parse(rawTestResults);
  });

  test("The total number of test cases should be 4", () => {
    try {
      expect(testResults.numTotalTests).toBe(4);
    } catch (error) {
      errors.push("Have you removed any of the tests?");
    }
  });

  test("The number of test cases that pass should be 4", () => {
    try {
      expect(testResults.numPassedTests).toBe(4);
    } catch (error) {
      errors.push(
        "Check the test cases or the code in string-utils.js file, not all test cases are passing."
      );
    }
  });

  test("The number of test cases that fail should be 0", () => {
    try {
      expect(testResults.numFailedTests).toBe(0);
    } catch (error) {}
  });

  test("The result for each function should be 'passed'", () => {
    const expectedTestCaseResults = [
      "The function 'reverse' should reverse a string - passed",
      "The function 'isPalindrome' should check for palindromes correctly - passed",
      "The function 'toTitleCase' should capitalize the right words - passed",
      "The function 'capitalizeWords' should capitalize all words - passed",
    ];

    const functions = [
      "reverse",
      "isPalindrome",
      "toTitleCase",
      "capitalizeWords",
    ];

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
