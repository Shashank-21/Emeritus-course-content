const { reverse } = require("./string-utils");

describe("String Utilities", () => {
  test("The function 'reverse' should reverse a string", () => {
    // Write a test case for the reverse function that checks the following:
    // 1. The function should reverse the string 'hello' to 'olleh'.
    expect(reverse("hello")).toBe("olleh");
    // 2. The function should reverse the string 'racecar' to 'racecar'.
    expect(reverse("racecar")).toBe("racecar");
    // 3. The function should reverse the string 'a' to 'a'.
    expect(reverse("a")).toBe("a");
    // 4. The function should reverse the string '123' to '321'.
    expect(reverse("123")).toBe("321");
  });
});
