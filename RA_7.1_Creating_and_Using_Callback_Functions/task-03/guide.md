In this task, you will dive into the performance analysis of past cleanup events. You'll focus on events with the status "Completed" and perform several computations to understand the impact these events have had. By analyzing the total waste collected, the total number of participants, and the average waste collected, you will derive meaningful insights about the efficiency and effectiveness of these events.

# Instructions:

Calculate the following for the completed events:
From the `eventsList` array, filter out events that are marked as “Completed”, using the `filter` function.
Total waste collected (in pounds), and store it in the `totalWasteCollected` variable.
Total number of participants (organizers and volunteers combined), and store it in the `totalParticipants` variable.
Average weight of waste collected per event, and store it in the `averageWasteCollectedPerEvent` variable
Average weight of waste collected per participant, and store it in the `averageWeightCollectedPerParticipant` variable.

Use the `reduce` function available on all arrays to accomplish this.

`reduce` Example:

```js
const nums = [1, 2, 3, 4, 5, 6];
const sum = nums.reduce((acc, curr) => {
  // acc stands for "accumulator", and curr stands for "current value"
  return acc + curr; // We are adding the current value to the accumulator - which gets updated in every turn
}, 0); // The accumulator starts at 0
// In this case, sum is 21;
```
