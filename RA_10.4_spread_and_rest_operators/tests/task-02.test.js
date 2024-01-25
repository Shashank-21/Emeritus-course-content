const path = require("path");
const { sumAll } = require(path.join(__dirname, "../task-02/task-02.js"));

describe("sumAll function", () => {
  test("correctly sums multiple numbers", () => {
    const numbers = Array.from(
      { length: Math.floor(Math.random() * 5) + 2 },
      () => Math.floor(Math.random() * 10) + 1
    );
    const [x, y, ...rest] = numbers;
    const expectedSum = numbers.reduce((a, b) => a + b, 0);
    const actualSum = sumAll(x, y, ...rest);
    try {
      expect(expectedSum).toBe(actualSum);
    } catch (error) {
      throw new Error(
        `sumAll(${numbers.join(
          ", "
        )}) should return ${expectedSum}. It returns ${actualSum} instead`
      );
    }
  });

  test("does not just sum the first two numbers", () => {
    try {
      expect(sumAll(1, 2, 3)).not.toBe(3);
    } catch (error) {
      throw new Error(
        "The `sumAll` function sums only the first two numbers. Have you started the assignment yet?"
      );
    }
  });
});
