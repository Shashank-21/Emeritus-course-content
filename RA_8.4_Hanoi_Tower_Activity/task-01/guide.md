**Objective:** Complete the `moveDisks` function to solve the Tower of Hanoi problem using recursion.

1. **Understand the Base Case**:

   - The base case of the recursion occurs when there is only one disk to move (`n === 1`).
   - In this case, you need to move the disk directly from the source tower to the target tower.
   - Implement the following steps inside the `if (n === 1)` block:
     1. **Move the Disk**: Write a function call to `moveDisk` with `source` and `target` as their arguments. This line simulates moving a single disk from the source tower to the target tower.
     2. **Log the Towers**: Use `console.log(towers);` to print the current state of the towers after the move. This helps in visualizing the steps of the algorithm.
     3. **Exit the Function**: The `return;` statement terminates the execution of the function for the base case.

2. **Implement the Recursive Logic**:
   - When there are `n` disks to move, the problem is solved recursively by moving `n-1` disks around among the towers.
   - Follow these steps to implement the recursive logic:
     1. **Move `n-1` Disks from the `source` tower to the `spare` tower using the `target` tower as the spare with help of the `moveDisks` function**: Call `moveDisks(n - 1, source, spare, target);`. This step recursively moves `n-1` disks from the source tower to the spare tower, using the target tower as an intermediate holding area.
     2. **Move the `nth` Disk to the `target` tower using the `moveDisk` function**: Once the above step is complete, the largest disk (`nth` disk) can be moved directly to the target tower. Implement this by calling `moveDisk(source, target);`.
     3. **Log the Towers**: Use `console.log(towers);` to print the state of the towers after moving the nth disk.
     4. 1. **Move `n-1` Disks from the `spare` tower to the `target` tower using the `source` tower as the spare with help of the `moveDisks` function**: Finally, move the `n-1` disks from the spare tower to the target tower, using the source tower as the spare. Call `moveDisks(n - 1, spare, target, source);` to complete this step.
