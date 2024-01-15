const { isPalindrome } = require("./string-utils.js");

describe("String Utilities", () => {
  test("The function 'isPalindrome' should check for palindromes correctly", () => {
    // Write a test case for the isPalindrome function that checks the following:
    // 1. The function should return true for the string 'racecar'.
    expect(isPalindrome("racecar")).toBe(true);
    // 2. The function should return false for the string 'hello'.
    expect(isPalindrome("hello")).toBe(false);
    // 3. The function should return true for the string 'madam'.
    expect(isPalindrome("madam")).toBe(true);
    // 4. The function should return false for the string '123'.
    expect(isPalindrome("123")).toBe(false);
  });
});
