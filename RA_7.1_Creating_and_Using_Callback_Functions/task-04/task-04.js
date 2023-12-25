// This is a useful function that converts every date to milliseconds, which we can use for comparison
function returnMilliseconds(date) {
  return new Date(date).getTime();
}

function getFutureEvents(eventsList) {
  const futureEvents = eventsList.filter(
    (event) => event.eventStatus === "Yet to Start"
  );
  //Sort the array 'futureEvents' by date
  //Your code here

  return futureEvents;
}

// Don't change this line
if (typeof module !== "undefined") {
  module.exports = { getFutureEvents };
}
