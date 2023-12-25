function needsMoreVolunteers(event) {
  return event.numberOfVolunteers < event.requiredVolunteers;
}
function filterEventsWhichNeedVolunteers(eventsList) {
  const inNeedOfVolunteers = eventsList.filter(needsMoreVolunteers);
  return inNeedOfVolunteers;
}

// Function to create a message for each event
function createVolunteerRecruitmentMessage(event) {
  // TODO: Construct a message using the event's details. The message should include:
  // the event's title, location, date, the names of the organizers, how many more volunteers are needed, and the organizers' contact information.

  // Example: "Join us at [title] in [location] on [date]. [number] more volunteers needed. Contact [organizer's name] at [phone number] or [email]."

  // Return the crafted message
  return "";
}

function generateAllVolunteerRecruitmentMessages(inNeedOfVolunteers) {
  // Map over the 'inNeedOfVolunteers' array to create messages
  const volunteerRecruitmentMessages = []; //Replace this line;
  return volunteerRecruitmentMessages;
}

// Don't change this line
if (typeof module !== "undefined") {
  module.exports = {
    filterEventsWhichNeedVolunteers,
    generateAllVolunteerRecruitmentMessages,
  };
}
