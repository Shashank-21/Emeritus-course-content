//This function is used to verify whether an event is completed or not
//By checking whether the 'eventStatus' parameter is 'Completed' or not.
function isEventCompleted(event) {
  //Your code here
  return;
}

function parseWasteCollected(wasteCollected) {
  const [quantity] = wasteCollected.split(" ");
  return parseFloat(quantity);
}

function getCompletedEvents(eventsList) {
  const completedEvents = []; //Filter out all events that are completed by using array.prototype.filter
  return completedEvents;
}

function generateStats(completedEvents) {
  //Use the array.prototype.reduce to calculate the total waste collected and the total participants across completed events
  const totalWasteCollected = 0;
  const totalParticipants = 0;

  const averageWasteCollectedPerEvent = 0;
  const averageWasteCollectedPerParticipant = 0;

  return {
    totalWasteCollected,
    totalParticipants,
    averageWasteCollectedPerEvent,
    averageWasteCollectedPerParticipant,
  };
}

// Don't change this line
if (typeof module !== "undefined") {
  module.exports = {
    getCompletedEvents,
    generateStats,
  };
}
