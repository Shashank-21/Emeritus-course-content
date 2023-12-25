function needsMoreVolunteers(event) {
  return event.numberOfVolunteers < event.requiredVolunteers;
}
function filterEventsWhichNeedVolunteers(eventsList) {
  const inNeedOfVolunteers = eventsList.filter(needsMoreVolunteers);
  return inNeedOfVolunteers;
}

function createVolunteerRecruitmentMessage(event) {
  // TODO: Construct a message using the event's details. The message should include:
  // the event's title, location, date, the names of the organizers, how many more volunteers are needed, and the organizers' contact information.

  // Example: "Join us at [title] in [location] on [date]. [number] more volunteers needed. Contact [organizer's name] at [phone number] or [email]"

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

  // Return the crafted message
  return message;
}

// Map over the 'inNeedOfVolunteers' array to create messages
function generateAllVolunteerRecruitmentMessages(eventList) {
  const volunteerRecruitmentMessages = inNeedOfVolunteers.map(
    createVolunteerRecruitmentMessage
  ); //Replace this line;
  return volunteerRecruitmentMessages;
}
// Don't change this line
if (typeof module !== undefined) {
  module.exports = {
    filterEventsWhichNeedVolunteers,
    generateAllVolunteerRecruitmentMessages,
  };
}
