const { eventsList } = require("./events.js");
// TODO: [Optional] Define a function 'needsMoreVolunteers' that checks if an event requires more volunteers.
// Hint: An event needs more volunteers if 'numberOfVolunteers' is less than 'requiredVolunteers'.
function needsMoreVolunteers(event) {
  return event.numberOfVolunteers < event.requiredVolunteers;
}
function filterEventsWhichNeedVolunteers(eventsList) {
  // TODO: Use the Array.prototype.filter() method to create a new array 'inNeedOfVolunteers'
  // that contains all events from 'eventList' needing more volunteers. You will need to use
  // the 'needsMoreVolunteers' function you defined as the callback function for the filter method.
  const inNeedOfVolunteers = eventsList.filter(needsMoreVolunteers); //Replace this line
  return inNeedOfVolunteers;
}
// TODO: Log the 'inNeedOfVolunteers' array to the console to verify your results.
// Don't change this line
if (typeof module !== "undefined") {
  module.exports = { filterEventsWhichNeedVolunteers };
}
