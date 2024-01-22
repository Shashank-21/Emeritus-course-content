In the code below, you’ve been provided with a function `acceptBook` that takes four parameters: `book`, `library`, `existingBookAction`, and `newBookAction`. The function first searches for the book in the library array by title.

- If the book is found, it should execute `existingBookAction` and pass the relevant parameters to it: `library` and `existingBook.title`.
- If the book is not found, it should execute `newBookAction` and pass the relevant parameters to it: `library`, `book.action` and `book.title`.

Note: We’re passing the `addBook` and `updateBorrowCount` functions, which take different parameters. We’ll be using `addBook` as the `newBookAction` and `updateBorrowCount` as the `existingBookAction`.

Run `npm run task-04` in the terminal to see your code in action. (Note to Hitesh: Please setup 'Try it' button here)
