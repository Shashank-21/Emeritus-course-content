Instructions:

## Part 1: Implementing the `reverse` Function

**Objective**: Complete the function `reverse(str)`, in the file `string-utils.js` file, that takes a string as an input and returns the reversed version of that string.

**Details**:

1. **Function Name**: `reverse`.
2. **Parameter**: A single parameter `str`, which is the string to be reversed.
3. **Return Value**: The function should return the reversed version of the input string.

**Implementation Logic**:

- Initialize an empty string variable, let's call it `reversedString`, which will hold the reversed string.
- Use a `for` loop to iterate over the input string in reverse order. This means starting the loop from the end of the string (at `str.length - 1`) and decrementing the index in each iteration.
- In each iteration, concatenate the current character (accessed using `str[i]`) to `reversedString`.
- After the loop completes, `reversedString` will contain the input string in reverse order.
- Return `reversedString`.

## Part 2: `string-utils.test.js` Test Cases

Once you've updated `string-utils.js`, it's time to test your functions in `string-utils.test.js`. Here, you're going to write the test for the `reverse` function that checks for the following:

- When the input is `"hello"`, the output must be `"olleh"`
- When the input is a palindrome, like `"racecar"`, the output should be the same as the input (In this case, `"racecar"`)
- When the input is a single character, the output must be the same character.

Use the jest's `expect` function for the test code.

Example:
If we had to test whether the function `reverse('hello')` returns `'olleh'`, then we write the test code as:

```js
expect(reverse("hello")).toBe("olleh");
```

Try it: `npm run test:task-01`
Check it: `npm run test1:json`
