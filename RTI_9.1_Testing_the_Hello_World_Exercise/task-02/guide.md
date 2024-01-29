Instructions:

## Part 1: Implementing the `isPalindrome` Function

**Objective**: Complete the function `isPalindrome(str)`, in the file `string-utils.js` file that takes a string as an input and determines whether it is a palindrome. A palindrome is a word, phrase, or sequence that reads the same forwards and backwards (for example, "racecar" or "level").

**Details**:

1. **Function Name**: `isPalindrome`.
2. **Parameter**: A single parameter `str`, which is the string to be checked for being a palindrome.
3. **Return Value**: The function should return `true` if the input string is a palindrome, and `false` if it is not.

**Implementation Logic**:

- Utilize the `reverse` function (which you should have already implemented) to get the reversed version of the input string. This function takes a string and returns it in reverse order.
- Compare the original string `str` with the reversed string. If they are identical, it means the string is a palindrome.
- The comparison should be a strict equality check. In JavaScript, this is done using the `===` operator.
- Return `true` if the original string and the reversed string are the same; otherwise, return `false`.

**Process Steps**:

- Call the `reverse` function with `str` as its argument and store the result in a variable, for example, `reversedStr`.
- Perform a comparison: `str === reversedStr`.
- Based on this comparison, return `true` (if the string is a palindrome) or `false` (if the string is not a palindrome).

## Part 2: `string-utils.test.js` Test Cases

In `string-utils.test.js`, implement the `isPalindrome` function tests:

- It should return `true` for palindromes like `"madam"` and `"racecar"`.
- It should return `false` for non-palindromes like `"hello"` and `"123"`.

Use the jest's `expect` function for the test code.

Example:
If we had to test whether the function `isPalindrome('hello')` returns `false`, then we write the test code as:

```js
expect(isPalindrome("hello")).toBe(false);
```

Try it: `npm run test:task-02`
Check it: `npm run test2:json`
