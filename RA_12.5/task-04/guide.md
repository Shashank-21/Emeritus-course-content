### Task 4 Instructions: Calculating Total Price in the Shopping Cart

#### Objective

Implement the functionality within the `CartTotal` component to calculate and display the total price of all items in the shopping cart. This feature is crucial for providing users with real-time feedback on the total cost of their selected items, enhancing the shopping experience.

#### Detailed Requirements

1. **Calculate Total Price:**

   - Modify the `CartTotal` component to calculate the total price of items in the cart. Each item's contribution to the total is its price multiplied by its quantity (`price * qty`).
   - Utilize the `reduce` method on the `cartItems` array passed as props to accumulate this total. Remember to pass the initial value as `0`
