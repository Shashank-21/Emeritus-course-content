const {
  isPalindrome,
  reverse,
  toTitleCase,
  capitalizeWords,
} = require("./string-utils");

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
  test("The function 'toTitleCase' should capitalize the right words", () => {
    // Write a test case for the toTitleCase function that checks the following:
    // 1. The function should convert the string 'hello world' to 'Hello World'.
    expect(toTitleCase("hello world")).toBe("Hello World");
    // 2. The function should convert the string 'the quick brown fox jumps over the lazy dog' to 'The Quick Brown Fox Jumps over the Lazy Dog'.
    expect(toTitleCase("the quick brown fox jumps over the lazy dog")).toBe(
      "The Quick Brown Fox Jumps over the Lazy Dog"
    );
    // 3. The function should convert the string 'a' to 'A'.
    expect(toTitleCase("a")).toBe("A");
    // 4. The function should convert the string '123' to '123'.
    expect(toTitleCase("123")).toBe("123");
  });
  test("The function 'capitalizeWords' should capitalize all words", () => {
    // Write a test case for the capitalizeWords function that checks the following:
    // 1. The function should convert the string 'hi, my name is john' to  'Hi, My Name Is John'.
    expect(capitalizeWords("hi, my name is john")).toBe("Hi, My Name Is John");
    // 2. The function should convert the string 'what are you doing?' to 'What Are You Doing?'.
    expect(capitalizeWords("what are you doing?")).toBe("What Are You Doing?");
    // 3. The function should convert the string 'x' to 'X'.
    expect(capitalizeWords("x")).toBe("X");
    // 4. The function should convert the string '234' to '234'.
    expect(capitalizeWords("234")).toBe("234");
  });
});
