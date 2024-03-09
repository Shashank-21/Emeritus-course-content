### Task Instructions

Your task is to enhance the `Withdraw` component in React (In the file `withdraw.js`), which should display the user's withdraw information. You will utilize the `useContext` hook to access user data from the `UserContext` and render this information within the component.

1. **Utilize `useContext` Hook**: Import and utilize the `useContext` hook within the `Withdraw` component to access the `UserContext`. Assign the context value to a variable for subsequent use. For guidance on how to use `useContext`, refer to the implementation in the `alldata.js` file.

2. **Display Withdraw Information**: Modify the returned JSX to include the user's withdraw information. After the "Withdraw" text and a line break (`<br />`), render the stringified version of the context data. This will showcase the user's withdraw and any additional user-related information contained within the context.

3. **Maintain Structure**: Ensure that the withdraw information is displayed within an `h1` tag, following the "Withdraw" text and a line break.

By following these instructions, you will successfully integrate user context into the `Withdraw` component, allowing it to dynamically display user-specific withdraw information.
