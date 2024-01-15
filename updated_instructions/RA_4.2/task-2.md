**Total Points: 5**

Write a `while` loop that continues as long as items remain in the storage to restock (`storageItemCount > 0`). In each iteration of the loop:

1. Determine the number of items to restock in the current trip.
   Use Math.min() to choose the lesser of `storageItemCount` and `restockPerTrip` to ensure that you don't restock more than what is available or more than the capacity per trip.
   Example:

   ```js
   Math.min(2, 5); // Gives the value of the minimum of the two numbers, which is 2 in this case
   ```

   Store the minimum value in the `itemsToRestock` variable.

2. Subtract the number of items restocked in this trip from `storageItemCount` using the `-=` operator.
3. Increase the trip counter by 1 (`trips++` or `trips += 1`) .

4. Concatenate the restock information for the current trip to `restockInfo`. The information should include the trip number and the number of items restocked for this trip in the format: "Trip X: Restocked Y items." For this:
   - Define a variable `restockInfo`. Assign the string `"Trip "` to the variable.
   - Add the value of the `trips` variable to the `restockInfo` variable using the `+=` operator (`restockInfo += trips;`).
   - Add the string `": Restocked "` to the `restockInfo` variable using the `+=` operator.
   - Add the value of the `itemsToRestock` variable to the `restockInfo` variable using the `+=` operator.
   - Finally, add the string `"items."` to the `restockInfo` variable. Remember to add the period at the end.
