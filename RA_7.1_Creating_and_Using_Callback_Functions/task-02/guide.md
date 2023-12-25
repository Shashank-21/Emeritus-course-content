#### Task 2

In this task, you must ensure that our community events have enough helping hands to run smoothly. Unfortunately, some events are short on staff. Your mission is to spread the word! You'll be creating compelling calls-to-action for each event that's low on volunteers. These messages should be informative and engaging, encouraging community members to step up and help out. For each event in need, you'll craft a message that includes the event's title, location, date, the names of the organizers, how many more volunteers are needed, and the organizers' contact information. Ready to make a difference with your coding skills? Let's begin!

# Instructions:

Inside the `generateAllVolunteerRecruitmentMessages` function, map over the `inNeedOfVolunteers` array to generate an array of messages which we’ll store in the `volunteerRecruitmentMessages` array using the `map` function.

For instance, consider this event:

```js
{
title: "woot excluding tedious",
eventId: "8b6a3535-81f0-41d4-9aca-23819c1fa87c",
location: "Ledner Meadow",
date: "4/1/2024",
numberOfVolunteers: 3,
requiredVolunteers: 9,
materialsProvided: ["garbage bags", "recycling bins", "paper pickers"],
wasteCollected: null,
eventStatus: "Yet to Start",
organizersContact: [
{
id: "3a0845ef-5e85-4b74-9aed-199691484747",
name: "Dena Prohaska",
contact: "802.777.5129 x3585",
email: "Dena_Prohaska39@gmail.com",
responsibility: "following test gracefully",
},
{
id: "10472f68-8371-45aa-849c-837aedf681e0",
name: "Aryanna Christiansen",
contact: "1-616-354-5352 x3758",
email: "Aryanna13@gmail.com",
responsibility: "liar into than",
},
{
id: "cf2ac237-5e1a-4aa2-a02e-5bd059642125",
name: "Genevieve Rodriguez",
contact: "456.332.5675 x9814",
email: "Genevieve85@yahoo.com",
responsibility: "bespeak fun at",
},
],
volunteerList: [
{
id: "197f8266-9718-4906-ac12-3f4907d35091",
name: "Sammie Block",
contact: "(317) 429-6999 x063",
email: "Sammie.Block@gmail.com",

    },
    {
      id: "097fee7c-beba-4b3a-ab58-611b2e2c06e7",
      name: "Greg Heaney",
      contact: "302.427.3597 x71555",
      email: "Greg.Heaney@gmail.com",
    },
    {
      id: "e3fd6e6a-64d3-40eb-ab3c-7c00834e1d1f",
      name: "Chyna Rolfson",
      contact: "(437) 542-1812 x39914",
      email: "Chyna_Rolfson63@hotmail.com",
    },

],
eventDescription:
"minus last froth retool fitting although who oof heavily unlike markup insert feminine toward pot for down official round admired",
};
```

The message can be:
_Join our community effort at 'woot excluding tedious' in Ledner Meadow on 4/1/2024! We're currently 6 volunteers short and need your help to make this_ _event a success. You can be a part of something meaningful and contribute to our goal of a cleaner and happier community. For more information or to join_ _our team, please reach out to our dedicated organizers:_

_Dena Prohaska: Call at 802.777.5129 x3585 or email Dena_Prohaska39@gmail.com_

_Let's work together to make a positive impact on Ledner Meadow. See you there!_

You can choose to display one organizer’s information or every organizer’s information. That’s left up to you.

`map` Example:

```js
const nums = [1, 2, 3, 4, 5, 6];
function square(number) {
  return number ** 2; //Returns the square of the number
}
const squareNums = nums.map(square); // map takes in a callback function, and applies it on every element in the array, and returns a new array which has the returned values from the function
// In this case, squareNums is [1, 4, 9, 16, 25, 36];
```
