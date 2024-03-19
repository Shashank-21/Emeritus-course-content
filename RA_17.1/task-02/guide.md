### Task Instructions: Implement JWT Token Verification

In the provided `verifyToken.js` file, you'll find the skeleton of a middleware function designed to verify and decode JWT tokens from incoming requests. Your task is to complete the implementation of this middleware to ensure only valid requests proceed further in the application flow.

**Your Goals:**

1. **Implement Token Verification:**
   - Within the `verifyToken` function, you'll find a `TODO` comment. Your job is to replace this comment with a line of code that uses `jwt.verify()` to verify and decode the JWT token provided in the request headers.
2. **Handle the Decoded Token:**
   - Store the result of `jwt.verify()` in a constant named `decodedToken`. This constant will hold the decoded information from the JWT token if it's valid.
3. **Assign the Decoded Token to the Request:**
   - After successfully decoding the token, assign `decodedToken` to `req.user`. This action will pass the decoded token's data to the next middleware or route handler, making it accessible throughout the request-response cycle.

**Guidance:**

- The `jwt.verify()` method is crucial for this task. It takes two essential arguments: the token to verify (`token`) and the secret key used for token signing (`SECRET_KEY`).
- Proper error handling is crucial. The try-catch block is already provided, ensuring that if token verification fails, an error response is sent back to the client.

**Testing Your Implementation:**

- In the terminal, run the command `npm run start`
- Open a separate terminal window
- Click on the 'TRY IT' button to test your code.

Try it instructions:

- First run chmod +x get_posts.sh
- Command: './get_posts.sh'
