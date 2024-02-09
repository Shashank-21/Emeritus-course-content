#### Task 1: Counting tasks

#### Objective:

Your task is to complete the Task Manager application by adding dynamic statistics to track and display the total number of tasks. This feature will also serve to demonstrate and understand the impact of child component updates on parent component rerendering.

#### Task Instructions:

1. **Total Number of Tasks:**

   - Implement a feature within the `App.js` component to dynamically display the total count of tasks. This count should update in real-time as tasks are added or removed from the list. For this, you need to calculate the length of the `tasks` array
     Pay attention to how adding or removing tasks causes the parent component (`App`) to rerender. Consider the efficiency of this process and how React optimizes rerendering.
