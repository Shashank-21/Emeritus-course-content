### Task 2 Instructions: Updating Item Quantity in the Shopping Cart

#### Objective

Expand the functionality of your Shopping Cart application by enabling users to update the quantity of items directly within the cart. This task focuses on implementing the logic to adjust item quantities and ensuring the cart reflects these updates accurately.

#### Requirements

1. **Enhance `updateItemCount` Function:**

   Your task is to complete the `updateItemCount` function in the `App` component. This function should update the quantity of an existing item in the cart based on user interaction.

   **Steps:**

   - The function receives two parameters: `itemId` (the unique identifier for the item) and `qty` (the new quantity to be set for the item).
   - Use `cartItems.map` to iterate over the current items in the cart. By doing this, you can ensure that the item's quantity is updated in an immutable way. This means that, the existing `cartItems` state is not directly modified. Instead, a new array with the updated item information is created. (This is important for updating state)
   - For the item with an `id` matching `itemId`, update its `qty` property to the new `qty` value provided.

2. **Update the Cart State:**

   - Once you've determined the updated list of cart items (with adjusted quantities), use `setCartItems` to update the `cartItems` state.
   - This update will trigger a re-render of the cart, reflecting the new quantities of items or the removal of items as necessary.
