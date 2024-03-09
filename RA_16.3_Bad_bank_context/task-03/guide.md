### Task Instructions

Your task is to enhance the `Login` component in React (In the file `login.js`), which should display the user's login information. You will utilize the `useContext` hook to access user data from the `UserContext` and render this information within the component.

1. **Utilize `useContext` Hook**: Import and utilize the `useContext` hook within the `Login` component to access the `UserContext`. Assign the context value to a variable for subsequent use. For guidance on how to use `useContext`, refer to the implementation in the `alldata.js` file.

2. **Display Login Information**: Modify the returned JSX to include the user's login information. After the "Login" text and a line break (`<br />`), render the stringified version of the context data. This will showcase the user's login and any additional user-related information contained within the context.

3. **Maintain Structure**: Ensure that the login information is displayed within an `h1` tag, following the "Login" text and a line break.

By following these instructions, you will successfully integrate user context into the `Login` component, allowing it to dynamically display user-specific login information.
