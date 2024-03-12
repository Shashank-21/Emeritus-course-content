### Task Instructions: Implement Authorization Check in Middleware

You are provided with a partially implemented middleware function named `isAdmin` in the `verifyToken.js` file. This function is designed to check if the authenticated user has an admin role. Your task is to complete the function to ensure that only users with an admin role can proceed, while all others receive an appropriate error response.

**Your Objectives:**

1. **Complete the Authorization Check:**

   - Inside the `isAdmin` function, you'll find an `if` statement that checks if the user's role is not 'admin'.
   - Your task is to complete this `if` block by adding code that sends a 403 status code response back to the client, indicating that the request is forbidden for users who are not admins.

2. **Provide an Informative Message:**
   - Along with the status code, your response should include a message stating that the user is not authorized to perform the action. This message should be clear and user-friendly.

**Guidance:**

- You need to use the `res` object to set the status code and send the message back to the client.
- Remember that once you send a response back to the client, you should ensure that the middleware does not proceed to the next function in the chain for unauthorized users.

**Testing Your Implementation:**

Click on the 'Try it' button to test your implementation

Try it instructions:

- First run chmod +x admin_roles.sh
- Command: './admin_roles.sh'
