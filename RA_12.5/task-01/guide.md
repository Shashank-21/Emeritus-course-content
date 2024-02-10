### Task 1 Instructions: Implementing `addItemToCart` in the Shopping Cart

#### Objective

Your goal is to refine the `App` component, enabling the functionality to add items to a shopping cart. Each addition should set an item's initial quantity to 1. For items already in the cart, simply increment the existing quantity by 1 upon re-addition, avoiding duplicate entries.

#### Detailed Requirements

1. **Enhance the `addItemToCart` Function:**

   - Inside the `addItemToCart` function, the code starts by searching for the item in the current `cartItems` state to determine if it already exists. Use the `.find()` method on `cartItems` to look for an item with a matching `id`.

     ```javascript
     const itemExists = cartItems.find((cartItem) => cartItem.id === item.id);
     ```

   - If the item is found (`itemExists` is truthy), it means the item is already in the cart. Here, you'll update the `cartItems` state. Map over `cartItems`, and when you find the item (where `cartItem.id === item.id`), return a new object that spreads the existing `cartItem` properties but with `qty` incremented by 1.
   - If the item does not exist in the cart (`itemExists` is falsy), you'll add a new entry to the `cartItems` state. This new entry should be the added item object with an additional property `qty` set to 1. Spread the current `cartItems` in the new state to ensure immutability.

2. **Immutability of State Updates:**

   - It's crucial to maintain the immutability of the state when updating it. This means you should not directly modify the `cartItems` state. Instead, create a new array or object based on the current state and apply your changes to this new structure, as demonstrated in the steps above.

3. **Accurate State Reflection:**

   - Ensure that every addition action taken reflects accurately in the application's UI by properly setting the `cartItems` state with the updated array each time `addItemToCart` is called.
