function needsMoreVolunteers(event) {
  return event.numberOfVolunteers < event.requiredVolunteers;
}

function createVolunteerRecruitmentMessage(event) {
  const message = `Join our community effort at ${event.title} in ${
    event.location
  } on ${event.date}! We're currently ${
    event.requiredVolunteers - event.numberOfVolunteers
  } volunteers short and need your help to make this event a success. You can be a part of something meaningful and contribute to our goal of a cleaner and happier community! For more information or to join our team, please reach out to our dedicated organizer:\n ${
    event.organizersContact[0].name
  }: Contact at ${event.organizersContact[0].contact} or email at ${
    event.organizersContact[0].email
  } \nLet's work together to make a positive impact on ${
    event.location
  }. See you there!`;
  return message;
}

const inNeedOfVolunteers = eventsList.filter(needsMoreVolunteers);
const volunteerRecruitmentMessages = inNeedOfVolunteers.map(
  createVolunteerRecruitmentMessage
);

function isEventCompleted(event) {
  return event.eventStatus === "Completed";
}

function parseWasteCollected(wasteCollected) {
  const [quantity] = wasteCollected.split(" ");
  return parseFloat(quantity);
}

const completedEvents = eventsList.filter(isEventCompleted);

const totalWasteCollected = completedEvents.reduce(
  (totalWaste, event) => totalWaste + parseWasteCollected(event.wasteCollected),
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
