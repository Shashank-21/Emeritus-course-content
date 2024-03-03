### Task 1: Enhancing the Task Component

#### Objective:

Improve the `Task` component to visually differentiate between completed and pending tasks, and implement the functionality to toggle a task's completion status.

#### Instructions:

1. **Dynamic Class Assignment:**

   - Modify the parent `div` element of the `Task` component to have a dynamic `className`. The class should be `'task'` for pending tasks and `'task completed'` for tasks that are marked as completed.
   - Use conditional rendering to add the `'completed'` class based on the `task.completed` property.

   Example:
   If a `div` needs to be given a className `day` at all times, and `ready` only when the state `isReady` is true, then thecode would look like this:

   ```javascript
   <div className={`day ${isReady ? 'ready' : ''}`}>
   ```

2. **Toggle Task Completion:**
   - Add an `onChange` prop to the checkbox input that toggles the task's completion status. This prop should be an anonymous function calling `toggleTaskCompletion` with `task.id` as its argument.
   - Ensure that clicking the checkbox updates the task's completion status appropriately.
