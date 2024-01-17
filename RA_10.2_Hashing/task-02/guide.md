### Task 2: Implementing Password Verification

**Objective**:
Continuing from the first part of the assignment, where you successfully hashed passwords, the second part focuses on verifying those passwords. The `verifyPassword` function is critical in any authentication process, as it compares a user-provided password against a stored, hashed password. Your task is to extract the salt from the stored password, use it to hash the input password, and then compare the two hashes to verify if the password is correct.

**Task Instructions**:

1. **Extract the Salt from the Stored Password**:

   - The stored password consists of the salt and the hash, separated by a dot (`.`).
   - Use the `split` method to separate these two components. The first part is the salt, and the second part is the hashed password.
   - Example Code:
     ```javascript
     const [salt, storedHash] = storedPassword.split(".");
     ```

2. **Hash the Input Password Using the Extracted Salt**:

   - Use the `scrypt` function to hash the `inputPassword` with the extracted salt. Remember, `scrypt` is an asynchronous function, so you'll need to use `await`.
   - The third parameter of `scrypt` is the length of the generated hash. Use `64` as specified in the assignment.
   - Example Code:
     ```javascript
     const hashedPassword = await scrypt(inputPassword, salt, 64);
     ```

3. **Understanding the rest of the code: Compare the Resulting Hash with the Stored Hash**:
   This part of the code has already been implemented, and here's what it does:
   - It converts the resulting `hashedPassword` Buffer to a hex string.
   - Then, it compares this string with `storedHash` to check if they are equal.
   - The function returns `true` if the hashes match, indicating the `password` is correct, and `false` otherwise.

Click on the `Try It` button to see your code in action

Setup guide for 'Try it': `node task-02/app.js`
