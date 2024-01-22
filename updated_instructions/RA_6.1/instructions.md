**Total Points: 2**

In the `greetUser` function, the name entered in the input is retreived in the `name` variable. Your task is to ensure the following:

- If the user enters a name, display a greeting in an `h1` element in the format: `"Hello, <name>!"`. For example, if the name entered is `Steve`, then the `h1` element should display `Hello, Steve!`. For this, you need to set the value of the `textContent` property of the `greeting` element as the given string (`Hello, <name>!`).
  Example:

  ```js
  greeting.textContent = "Hello, Steve!";
  ```

- If no name is entered, prompt the user with a message in a `p` element: `"Please enter your name"`.
  For this, you need to set the value of the `textContent` property of the `greeting` element as the given string (`Please enter your name`).

  Example:

  ```js
  greeting.textContent = "Please enter your name";
  ```

  Refresh the web page and enter the name to test your code.
