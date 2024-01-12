1. Your task is to implement the `reorderStudent` function, which takes in 2 arguments:

- `students` - an array of student objects.
- `studentName` - string, name of the student you want to reorder
- `newIndex` - number, the new position of the student

**Goal:** Find the student object whose `name` property matches with the `studentName` parameter passed in the function. If there is a student found, place the student in the new position indicated by the `newIndex`. Else, return a message implying that the student is not found.

**Logic:**

1. If the `newIndex` is greater than or equal to the `students` array's length, then return a message stating the `newIndex` is out of the limits of the array.
2. If the student at `newIndex` position already has the same `name` property as the `studentName`, then return a message stating that the student with name `studentName` is already at the index `newIndex`.
3. Initialize 2 variables:
   a. `studentToReorder` to `null`.
   b. `originalIndex` to `-1`.
4. Loop over the indices of the elements of the `students` array. In each iteration:
   a. Compare the `name` property of the student with the `studentName`.
   b. If they are the same, then assign the `studentToReorder` the value of the item in the `students` array at that index, and `originalIndex` to the value of the index and break out of the loop.
5. If the value of `studentToReorder` is `null`, then return a message (string) that implies that the student with the name is not found. Ensure to include the value of `studentName` in that message.
6. Else, use the `splice` method on the `students` array to remove the student
7. And finally, use the `splice` method again to place the student at the `newIndex`.
8. Return the `studentToReorder`
