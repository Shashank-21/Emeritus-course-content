### Unmounting the Square Component

### Task 2: Adding Square Removal Functionality

**Objective:** Modify the interactive color grid to allow users to remove squares. This task will reinforce your understanding of updating React component state and handling events.

### Task Overview:

Your current grid allows adding squares but lacks the option to remove them. Implement functionality that enables users to remove a square by clicking on it, using React state management and event handling.

### Instructions:

1. **Implementing the Removal Function in the Grid Component:**

   - Create a function named `handleRemoveSquare` that updates the grid's state to remove a square. This function should take an `id` as its parameter, identifying which square to remove.
   - Use the `filter` method on your current state array to return a new array excluding the square with the given `id`. The `filter` method creates a new array filled with elements that pass a test provided by a function.

   **Example Context:** If you were managing a list of items in a todo list, and you wanted to remove an item, you might use `filter` like this:

   ```javascript
   const handleRemoveItem = (itemId) => {
   	setItems((currentItems) =>
   		currentItems.filter((item) => item.id !== itemId)
   	);
   };
   ```

2. **Passing the Removal Function to Each Square:**

   - Modify the rendering of each `Square` component within your grid to include an `onRemove` prop. This prop will pass the `handleRemoveSquare` function, allowing each `Square` component to invoke it when needed.
   - Since you need the `id` of the square to remove it, ensure your `onRemove` prop is a function that calls `handleRemoveSquare` with the correct `id`.

   **Example Context:** In a todo list app, where each todo item has a delete button, you might pass a deletion function down to each todo item component like so:

   ```jsx
   <TodoItem key={todo.id} onDelete={() => handleRemoveItem(todo.id)} />
   ```

### Expected Outcome:

By completing this task, the grid will support not only adding but also removing squares. Each square will have an associated action (e.g., a button click) that when triggered, removes the square from the grid. This exercise demonstrates the dynamic nature of React state and the power of array manipulation methods like `filter` in updating the UI based on user interaction.
