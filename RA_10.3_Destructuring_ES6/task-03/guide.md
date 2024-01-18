**Task 3: Object Destructuring with Renaming**

**Objective:** Learn and practice object destructuring with renaming in ES6. Your task is to extract only the `name` property from two given objects, `person1` and `person2`, and rename these properties to `name1` and `name2` respectively.

**Example of Destructuring with Renaming (Unrelated to the Code):**

Consider an object representing a book:

```javascript
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
};
```

Now, suppose you want to extract the `title` and `year` properties but rename them to `bookTitle` and `publicationYear`:

```javascript
const { title: bookTitle, year: publicationYear } = book;

console.log(bookTitle); // Output: "The Great Gatsby"
console.log(publicationYear); // Output: 1925
```

In this example, `title` is renamed to `bookTitle`, and `year` is renamed to `publicationYear` during the destructuring process. This demonstrates how you can extract properties from an object and assign them to variables with different names.

**Instructions:**

1. Extract the `name` property from both `person1` and `person2`.
2. Rename these properties during destructuring to `name1` and `name2` respectively.
3. After completing the destructuring, uncomment the `console.log` lines to display the names using the renamed variables.
4. Ensure that the export statement at the end of the file remains unchanged.
5. Test your code to ensure that it correctly logs the names of `person1` and `person2`.

**Hints:**

- Use the object destructuring with renaming syntax: `const { property: newName } = object;`.

**Expected Output:**
The console should display:

```
Name of person 1: Alice
Name of person 2: Bob
```

Try It command: `node task-03/task-03.js`
