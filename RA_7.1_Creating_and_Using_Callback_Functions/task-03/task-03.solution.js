//This function is used to verify whether an event is completed or not
//By checking whether the 'eventStatus' parameter is 'Completed' or not.
function isEventCompleted(event) {
  //Your code here
  return event.eventStatus === "Completed";
}

function parseWasteCollected(wasteCollected) {
  const [quantity] = wasteCollected.split(" ");
  return parseFloat(quantity);
}

function getCompletedEvents(eventsList) {
  const completedEvents = eventsList.filter(isEventCompleted); //Filter out all events that are completed by using array.prototype.filter
  return completedEvents;
}

function generateStats(completedEvents) {
  //Use the array.prototype.reduce to calculate the total waste collected and the total participants across completed events
  const totalWasteCollected = completedEvents.reduce(
    (totalWaste, event) =>
      totalWaste + parseWasteCollected(event.wasteCollected),
    0
  );
  const totalParticipants = completedEvents.reduce(
    (totalParticipants, event) =>
      totalParticipants +
      event.numberOfVolunteers +
      event.organizersContact.length,
    0
  );

  const averageWasteCollectedPerEvent =
    totalWasteCollected / completedEvents.length;
  const averageWasteCollectedPerParticipant =
    totalWasteCollected / totalParticipants;

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
