#### Task 1

As coordinators of community environmental cleanup events, one of your critical responsibilities is ensuring that each event is adequately staffed. Volunteers are the backbone of these initiatives, and certain events might be in dire need of additional hands. Your task is to sift through the comprehensive list of events and pinpoint those still in need of volunteers. By harnessing the power of JavaScript, you can automate this process, focusing your recruitment efforts where they're needed most.

# Instructions:

Inside the `filterEventsWhichNeedVolunteers` function, using the `filter` function, create a new array called `inNeedOfVolunteers` that contains only the events where the number of volunteers is less than the required volunteers.
Example:

```js
const nums = [1, 2, 3, 4, 5, 6];
function checkEven(number) {
  return number % 2 === 0; //Returns a boolean value, true if the number is even and false if the number is not even
}
const evenNums = nums.filter(checkEven); // filter takes in a callback function, and applies it on every element in the array, and returns a new array which has elements for which the callback function returns true.
// In this case, evenNums is [2,4,6]
```
