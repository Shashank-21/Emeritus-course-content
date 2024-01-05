The Tower of Hanoi is a classic mathematical puzzle where you have three rods and a stack of disks. The objective of the puzzle is to move the entire stack to another rod, following these rules:
Only one disk can be moved at a time.
A disk can only be moved if it is on top of the stack.
A larger disk cannot be placed on top of a smaller disk.

Instructions:
The Tower of Hanoi can be solved using a recursive algorithm. A recursive algorithm is a function that calls itself. In the case of the Tower of Hanoi, the `moveDisks()` function calls itself recursively to move the disks from one rod to another.
For this assignment, you will need to fill out the `moveDisks()` function in the `hanoi.js` file. The function should take three arguments: the number of disks to move, the source rod, and the destination rod. The function should return nothing.
Here is some pseudocode for the `moveDisks()` function:

```
moveDisks(n, source, destination, spare):
  if n is 1:
    # Move the disk from the source rod to the destination rod.
  else:
    # Move the top n-1 disks from the source rod to the spare rod.
    moveDisks(n-1, source, spare, destination)


    # Move the largest disk from the source rod to the destination rod.
    moveDisks(1, source, destination, spare)


    # Move the top n-1 disks from the spare rod to the destination rod.
    moveDisks(n-1, spare, destination, source)
```
