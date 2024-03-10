### Task Instructions: Implementing Deposit Logic

1. **Implement Balance Update Logic**:

   - Within the `handleSubmit` function, after validating the deposit amount, call the `updateUserBalance` function with the `updatedBalance` as its parameter. This action updates the user's balance in the context.

2. **Update UI State**:
   - Set the `showUpdatedBalance` state to `true` to display the success message indicating that the deposit was successful.
   - Clear the `depositAmount` state by setting it to an empty string, which resets the input field for future transactions.
