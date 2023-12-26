### Word Count Assignment Introduction

In this assignment, you will develop a JavaScript function to analyze the frequency of words in a paragraph. This task will help you understand and apply fundamental concepts of string manipulation, objects, arrays, and sorting in JavaScript. By the end of this assignment, you will have created a function that processes a paragraph of text and returns a sorted list of word frequencies.

### Task Overview

Your task is to write a JavaScript function named `countWords` that takes a paragraph of text as input and returns an array containing the frequency of each word in the paragraph. The returned array should be sorted in descending order based on the frequency of each word.

### Task Instructions:

1. **Function Setup**: The function `countWords` should accept one parameter: `paragraph`, a string of text.

2. **Text Processing**:

   - Remove all periods (`.`) and commas (`,`) from the paragraph.
   - Convert the entire paragraph to lowercase to ensure case-insensitive processing.

3. **Word Splitting**:

   - Split the paragraph into an array of words using a space (`" "`) as the delimiter.

4. **Word Counting**:

   - Create an object to store the frequency of each word.
   - Iterate through the array of words, updating the count of each word in the object.

5. **Array Conversion**:

   - Convert the word frequency object into an array of arrays using `Object.entries`. Each sub-array should contain a word and its frequency.

6. **Sorting**:

   - Sort the array of word frequencies in descending order based on the frequency.

7. **Return Value**:
   - The function should return the sorted array of word frequencies.

### Example

If the input paragraph is: `"Hello world, hello"`, the output of the function should be: `[["hello", 2], ["world", 1]]`.
