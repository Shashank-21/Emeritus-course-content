### Task Instructions: Completing the Login Functionality

In this task, you need to finalize the login functionality in the `Login` component. Your goal is to ensure that users can log in with their credentials and receive appropriate feedback.

1. **Successful Login Handling**:

   - When the user successfully logs in (i.e., when the provided email and password match an account in the `users` array), call the `login` function provided in the context with the user's account object as the parameter.
   - After calling the `login` function, clear the input fields by setting the email and password states back to empty strings.

2. **Error Handling for Invalid Credentials**:
   - If the user's login attempt fails (meaning the email doesn't match any account or the password is incorrect), set the error state to "Invalid username or password". This will display an error message to the user, providing immediate feedback on the failed login attempt.

These instructions focus solely on adding the missing logic related to the `login` function invocation and error handling for incorrect credentials. Once implemented, these changes will enhance the `Login` component, enabling full login functionality with user feedback.
