### Rest operator

#### Objective

Your task is to complete the implementation of the `sumAll` function in the provided `task-02.js` file. This function should take at least two arguments and return the sum of all arguments passed to it.

#### Task Requirements

1. **Understand the Starter Code:**

   - The function `sumAll` currently calculates the sum of only the first two arguments (`x` and `y`).
   - The `...numbers` parameter uses JavaScript's rest parameter syntax to hold an array of all additional arguments passed to the function.

2. **Complete the Function:**

   - Modify the `sumAll` function to include the sum of the rest of the numbers.
   - Iterate over the `numbers` array and add each element to the `total` variable.

3. **Ensure Functionality:**
   - Your modified function should correctly return the sum of all arguments passed to it.
   - It should work for any number of arguments.
     Example:
     ```javascript
     sumAll(1, 2, 3); // This should return 6
     sumAll(1, 2, 3, 4); // This should return 10
     ```

Refresh the webpage and click on the 'Calculate Sum' button to see your code in action
