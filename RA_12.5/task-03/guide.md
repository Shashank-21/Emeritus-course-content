### Task 3: Implementing Item Removal from the Shopping Cart

#### Objective

Your objective is to enable users to remove items from their shopping cart. This functionality enhances user experience by allowing for greater flexibility in managing their cart contents.

#### Instructions

1. **Implement `removeItemFromCart` Function:**

   - Your task is to complete the implementation of the `removeItemFromCart` function within the `App` component. This function is responsible for removing an item from the `cartItems` state when a user decides they no longer want that item in their cart.
   - The function receives one parameter: `itemId`, which is the unique identifier for the item to be removed from the cart.

2. **Update State to Reflect Item Removal:**

   - Use the `filter` method on the `cartItems` state array to return a new array excluding the item with the `id` matching `itemId`.
   - Update the `cartItems` state with this new array to reflect the removal of the item.
   - Ensure that this operation maintains the immutability of the state.

By completing this task, you will add essential functionality to your shopping cart application, making it more dynamic and user-friendly.
