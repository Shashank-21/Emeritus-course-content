Instructions:

## Part 1: `string-utils.js` Implementation

**Objective**: Write a function named `toTitleCase(str)` in your JavaScript file. This function should convert a given string to 'title case', where the first letter of each significant word is capitalized. Certain smaller words (like connectors and prepositions) should remain in lowercase as specified in the `nonCapitalizedWords` array.

**Details**:

1. **Function Name**: `toTitleCase`.
2. **Parameter**: A single parameter `str`, which is the string to be converted to title case.
3. **Return Value**: The function should return the string converted to title case.

**Implementation Logic**:

- Split the input string `str` into an array of words using `split(" ")`. This divides the sentence into individual words.
- Define an array `nonCapitalizedWords` containing the list of words that should not be capitalized unless they are the first word in the string. For example, "the", "of", "a", etc.
- Iterate over the array of words. Convert each word to lowercase initially for uniformity.
- For each word, check two conditions:
  - If it's the first word in the array, capitalize it regardless of whether it's in the `nonCapitalizedWords` array.
  - If it's not in the `nonCapitalizedWords` array, capitalize it.
- Capitalize a word by converting its first character to uppercase and then concatenating the rest of the word.
- Push each processed word into a new array `titleCasedWords`.
- After processing all words, join the `titleCasedWords` array back into a single string using `join(" ")` and return this string.

**Process Steps**:

- Create a loop to iterate through the `words` array.
- Apply the lowercase transformation to each word.
- Apply the capitalization logic based on the position of the word and its presence in the `nonCapitalizedWords` array.
- Reassemble the sentence and return it.

**Usage**:

- To convert `"the quick brown fox jumps over the lazy dog"` to title case, call `toTitleCase("the quick brown fox jumps over the lazy dog")`. The function should return `"The Quick Brown Fox Jumps over the Lazy Dog"`, noting that "the" is capitalized only when it's the first word.

## Part 2: `string-utils.test.js` Test Cases

`toTitleCase` function tests:

1. The function should convert the string 'hello world' to 'Hello World'.
2. The function should convert the string 'the quick brown fox jumps over the lazy dog' to 'The Quick Brown Fox Jumps over the Lazy Dog'.
3. The function should convert the string 'a' to 'A'.
4. The function should convert the string '123' to '123'.

Use the jest's `expect` function for the test code.

Example:
If we had to test whether the function `toTitleCase('hello')` returns `"Hello"`, then we write the test code as:

```js
expect(toTitleCase("hello")).toBe("Hello");
```

Try it: `npm run test:task-04`
Check it: `npm run test4:json`
