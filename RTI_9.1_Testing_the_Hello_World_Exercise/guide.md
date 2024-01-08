Welcome to your Jest testing assignment. This exercise will sharpen your skills in writing test cases using Jest, the JavaScript Testing Framework you’ve been learning so far.

While we do have a string utility file with some basic operations, the real challenge lies in the test code. Your task will be to write comprehensive test cases for the provided string functions, ensuring they work as expected. It's less about the string manipulation itself and more about validating that our code is robust and error-free.

So, prepare to put your testing hat on, think like a user, and let's ensure our code quality is top-notch. Let's get started with writing those test cases!

Instructions:

## Part 1: `string-utils.js` Implementation

You'll find the `string-utils.js` file in your filetree. Here's what each function is attempting to do:

`reverse(str)`: Make it so that it takes any string and returns it back to front.
`isPalindrome(str)`: Teach it to recognize whether a string looks the same forwards and backwards, considering only alphanumeric characters and ignoring cases.
`capitalizeWords(str)`: Capitalize the first character of every word in a sentence.
`toTitleCase(str)`: Craft it to be a bit more selective, capitalizing the first letter of most words, but leaving some smaller connectors and prepositions in lowercase, just like in a book title.

## Part 2: `string-utils.test.js` Test Cases

Once you've updated `string-utils.js`, it's time to test your functions in `string-utils.test.js`. Your task is to write tests that verify your string utilities work as expected.

Here’s what you need to test for each function:

`reverse` function tests:
Does it correctly reverse simple words like 'hello'?
What about palindromes like `'racecar'`? Those tricky ones should look the same even after a reversal!
And let's not forget about single characters or number strings.

`isPalindrome` function tests:
It should spot true palindromes like `'madam'`.
It should deny false claims. `isPalindrome(‘hello’)` should return false

`toTitleCase` function tests:
Ensure it properly capitalizes the first and significant words even in simple two-word phrases.
In sentences, it should know the difference between what to capitalize and what not to, like `'the'` in the middle of a sentence.
It shouldn’t capitalize any numbers.

`capitalizeWords` function tests:
Every word’s first letter should be in uppercase.
Even if it's a single character, it should get capitalized.

After writing the test cases, run `‘npx jest string-utils.test.js’` in the terminal to see the test code in action!
