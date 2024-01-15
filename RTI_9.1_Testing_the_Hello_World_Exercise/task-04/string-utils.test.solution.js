const { toTitleCase } = require("./string-utils");

describe("String Utilities", () => {
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
});
