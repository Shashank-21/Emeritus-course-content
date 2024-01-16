### Assignment: Binary Search Algorithm in JavaScript

#### Introduction

In this assignment, you will explore a fundamental algorithm in computer science - the Binary Search Algorithm. This algorithm is a cornerstone in efficient data searching, offering a significant improvement over linear search, especially for large datasets. You will implement the binary search algorithm in JavaScript, a skill that is crucial for efficient data retrieval in real-world applications.

#### Assignment Overview

Your task is to write a JavaScript function named `binarySearch`. This function will take a sorted array of numbers and a number to search for within the array. Your implementation should return an object containing two properties: `index`, the position of the number in the array, and `steps`, the number of steps it took to find the number.

The binary search algorithm divides the array in half and determines which half of the array contains the target number, repeatedly reducing the search interval until the number is found or the interval is empty.

#### Binary Search Logic

The logic of the binary search algorithm is straightforward yet powerful:

1. **Start with the Entire Array**: Initially, consider the entire array as the search interval.

2. **Find the Middle Element**: In each step, find the middle element of the current interval. If the array has an odd number of elements, the middle is clear. If it has an even number, you can choose either of the two middle elements.

3. **Compare with the Target**: Check if this middle element is the target number. If it is, you've found your number, and the search ends.

4. **Divide the Interval**: If the target number is not the middle element, determine whether it lies in the left or the right half of the interval. If the target is less than the middle element, narrow down the interval to the left half; otherwise, to the right half.

5. **Repeat**: Repeat the process for the new interval, continually halving the search space, until you find the target number or the interval becomes empty (indicating the number isn't in the array).

This method works efficiently due to its logarithmic time complexity, O(log n), where 'n' is the number of elements in the array.

#### Instructions

1. **Implement the Algorithm**: Modify the `binarySearch` function to implement the binary search algorithm. The function should return the index of `num` in `array` if `num` exists in the array. If `num` is not in the array, the function should return -1 for the index. The Binary Search Algorithm works as follows:

   - Initially, define two variables, `start` and `end`. `start` should contain the index of the beginning of the array (`0`) and end should contain the index to the end of the array (`array.length - 1`)
   - While `start` is less than or equal to `end`:
     - Increment the `steps` variable.
     - Find the middle index (`mid`) of the current range (the average of `start` and `end`).
     - If the element at `mid` (`array[mid]`) is the target number (`num`), return the index (`mid`).
       (In this assignment, the value to be returned is an object that contains the `index` and the `steps` parameters.)
     - If the element at `mid` (`array[mid]`) is less than `num`, adjust `start` to be `mid + 1`.
     - Otherwise, adjust `end` to be `mid - 1`.
   - If the loop exits without finding the number, it means the number is not present in the array. Then you'd return the index `-1`.

2. **Count the Steps**: Your function should count the number of steps (iterations) it takes to find the number or conclude it's not in the array. Include this count in the returned object.

3. **Return the Result**: Your function should return an object with two properties: `index` and `steps`. For example, `{ index: 3, steps: 2 }`.

4. **Testing Your Code**: Ensure your function works correctly by testing it with different arrays and numbers. Verify that it returns the correct index and steps.

5. **Submission**: Once you have completed the implementation, submit your code as per the instructions provided by your instructor or platform.

#### Notes

- The array you are searching through is always sorted.
- If you're unfamiliar with the binary search algorithm, it's recommended to study its (logic)[https://www.geeksforgeeks.org/binary-search-in-javascript/] and procedure before starting the implementation.

Good luck! This exercise will enhance your understanding of search algorithms and their implementation in a real-world programming language.
