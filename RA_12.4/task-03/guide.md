#### Task 1: Counting tasks

#### Objective:

Your task is to complete the Task Manager application by adding dynamic statistics to track and display the number of completed tasks, and the number of pending tasks.

#### Task Instructions:

2. **Number of Completed Tasks:**

   - Add functionality to calculate and display the number of tasks that have been marked as completed. This statistic should be prominently displayed and update as tasks are completed or uncompleted. For this, use the `filter` function on the `tasks` array, to filter out all tasks that have its `completed` property marked `true`.
     Observe and understand how toggling the completion status of a task in a child component (`Task`) triggers rerendering in the parent component to update the displayed statistics.

3. **Number of Pending Tasks:**
   - Similarly, implement a count of pending tasks (where the `completed` property is `false`). This count should also dynamically update as tasks change state between pending and completed. For this, use the `filter` function on the `tasks` array, to filter out all tasks that have its `completed` property marked `false`.
     Reflect on the parent-child component relationship and how state changes in child components affect the parent component's state and trigger rerendering.
