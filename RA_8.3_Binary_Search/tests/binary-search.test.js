const path = require("path");
const { binarySearch } = require(path.resolve(
  __dirname,
  "../binary-search.js"
));

describe("binarySearch function tests", () => {
  const testArrays = [
    { array: [1, 2, 3, 4, 5], num: 3, expectedIndex: 2 },
    { array: [10, 20, 30, 40, 50], num: 40, expectedIndex: 3 },
    { array: [5, 7, 9, 11, 13, 15], num: 6, expectedIndex: -1 },
    // Add more test cases if needed
  ];

  testArrays.forEach((testCase, idx) => {
    describe(`Test case ${idx + 1}: array [${testCase.array}], search for ${
      testCase.num
    }`, () => {
      let result;

      beforeAll(() => {
        result = binarySearch(testCase.array, testCase.num);
      });

      test("should return an object", () => {
        try {
          expect(typeof result).toBe("object");
        } catch (error) {
          throw new Error("binarySearch function should return an object");
        }
      });

      test("should have 'index' property", () => {
        try {
          expect(result).toHaveProperty("index");
        } catch (error) {
          throw new Error("Result should have an 'index' property");
        }
      });

      test("should have 'steps' property", () => {
        try {
          expect(result).toHaveProperty("steps");
        } catch (error) {
          throw new Error("Result should have a 'steps' property");
        }
      });

      test("should return the correct index", () => {
        try {
          expect(result.index).toBe(testCase.expectedIndex);
        } catch (error) {
          throw new Error(
            `Expected index ${test.expectedIndex}, but got ${result.index}`
          );
        }
      });

      if (test.expectedIndex !== -1) {
        test("should find the index within a reasonable number of steps (logarithmic scale)", () => {
          try {
            let maxExpectedSteps = Math.ceil(Math.log2(testCase.array.length));
            expect(result.steps).toBeLessThanOrEqual(maxExpectedSteps);
          } catch (error) {
            throw new Error(
              `Number of steps ${
                result.steps
              } exceeded the expected maximum ${Math.ceil(
                Math.log2(testCase.array.length)
              )}`
            );
          }
        });
      }
    });
  });

  // Additional tests to verify edge cases and special conditions can be added here
});
