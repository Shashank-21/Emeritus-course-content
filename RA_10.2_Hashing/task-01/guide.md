**Implementing Password Hashing with Node.js**

In this task, you'll be working on a crucial aspect of cybersecurity: password hashing. You'll be using Node.js and its `crypto` module to accomplish this.

**Objective**: Complete the `hashPassword` function by implementing the password hashing step using the `scrypt` algorithm.

**Starter Code**:
The starter code provided includes necessary imports and the setup for the `hashPassword` function. Your task is to complete the function by adding the password hashing logic.

**Instructions**:

1. **Understand the Starter Code**:

   - The `randomBytes` function generates a random string, known as a salt, which makes the hash unique.
   - The `scrypt` function is a cryptographic algorithm for hashing passwords.
   - The `promisify` utility is used to work with `scrypt` in an asynchronous way.

2. **Your Task**:

   - Inside the `hashPassword` function, you need to hash the input password along with the generated salt.
   - Use the `scrypt` function for hashing. It takes three parameters: the password, the salt, and the length of the key. For the length of the key, use `64`.
   - The result of the `scrypt` function is a `Buffer`. Convert this to a hexadecimal string.

3. **Complete the Code**:
   - Locate the line in the code marked with `// Todo:`.
   - Add the missing line of code to hash the password with the salt using `scrypt`.
   - Ensure you await the result of `scrypt`, as it is an asynchronous operation.

**Example of What You Need to Add**:

```javascript
const hash = await scrypt(password, salt, 64);
```

Click on the `Try It` button to see your code in action

Setup guide for 'Try it': `node task-01/app.js`
