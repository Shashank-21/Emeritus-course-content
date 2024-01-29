Instructions:

Instructions:

## Part 1: `string-utils.js` Implementation

**Objective**: Complete the function `capitalizeWords(str)`, in the file `string-utils.js` file . This function should take a string as input, which represents a sentence, and capitalize the first letter of every word in the sentence. The function should then return the capitalized sentence.

**Details**:

1. **Function Name**: `capitalize`.
2. **Parameter**: A single parameter `str`, which is the string (sentence) to be capitalized.
3. **Return Value**: The function should return the sentence with the first letter of each word capitalized.

**Implementation Logic**:

- Split the input string `str` into an array of words using the `split(" ")` method. This method splits a string into an array of words based on spaces.
- Initialize an empty array, `capitalizedWords`, to store the capitalized words.
- Use a loop to iterate over each word in the array of words.
  - For each word, capitalize the first character and concatenate it with the rest of the word. This can be done by taking the first character (`word[0]`), using the `toUpperCase()` method to capitalize it, and then appending the rest of the word starting from the second character (`word.substring(1)`).
  - Add the capitalized word to the `capitalizedWords` array.
- After processing all words, join the `capitalizedWords` array back into a single string using the `join(" ")` method. This method combines all elements of an array into a string, separated by spaces.
- Return the resulting capitalized sentence.

**Note**: Ensure that the function correctly handles edge cases, such as input strings that are empty or consist of a single word.

**Usage**:

- To capitalize the sentence `"hello world"`, call `capitalize("hello world")`. The function will return `"Hello World"`.
- To capitalize a single word like `"javascript"`, call `capitalize("javascript")`. The function will return `"Javascript"`.

## Part 2: `string-utils.test.js` Test Cases

In `string-utils.test.js`, implement the `capitalizeWords` function tests:

- For the input `"hello world"`, the output must be `"Hello World"`.
- For the input `"the quick brown fox jumps over the lazy dog"`, the output must be `"The Quick Brown Fox Jumps Over the Lazy Dog"`.
- For the input `"a"`, the output must be `"A"`.
- For the input `"123"`, the output must be `"123"`.

Use the jest's `expect` function for the test code.

Example:
If we had to test whether the function `capitalizeWords('hello')` returns `"Hello"`, then we write the test code as:

```js
expect(capitalizeWords("hello")).toBe("Hello");
```

Try it: `npm run test:task-03`
Check it: `npm run test3:json`
