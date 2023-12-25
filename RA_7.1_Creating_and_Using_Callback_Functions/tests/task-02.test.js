const path = require("path");
const taskDirectory = path.resolve(__dirname, "../task-02");
const { eventsList } = require(path.resolve(taskDirectory, "events.js"));
const {
  filterEventsWhichNeedVolunteers,
  generateAllVolunteerRecruitmentMessages,
} = require(path.resolve(taskDirectory, "task-02.js")); //Replace with the path to the student’s code file

describe("Volunteer Recruitment Messages", () => {
  let inNeedOfVolunteers, volunteerRecruitmentMessages;
  beforeEach(() => {
    inNeedOfVolunteers = filterEventsWhichNeedVolunteers(eventsList);
    volunteerRecruitmentMessages =
      generateAllVolunteerRecruitmentMessages(inNeedOfVolunteers);
  });
  test("Messages are correctly formed", () => {
    inNeedOfVolunteers.forEach((event, index) => {
      const message = volunteerRecruitmentMessages[index];
      try {
        expect(message).toContain(event.title);
      } catch (error) {
        throw new Error(
          `Message ${index} does not contain the event title: ${event.title}`
        );
      }
      try {
        expect(message).toContain(event.location);
      } catch (error) {
        throw new Error(
          `Message ${index} does not contain the event location: ${event.location}`
        );
      }
      try {
        expect(message).toContain(event.date);
      } catch (error) {
        throw new Error(
          `Message ${index} does not contain the event date: ${event.date}`
        );
      }
      try {
        const organizerInfoIncluded = event.organizersContact.some(
          (organizer) =>
            message.includes(organizer.name) &&
            (message.includes(organizer.contact) ||
              message.includes(organizer.email))
        );
        expect(organizerInfoIncluded).toBeTruthy();
      } catch (error) {
        throw new Error(
          `Message ${index} does not contain at least one organizer's information:`
        );
      }

      try {
        expect(message).toContain(
          `${event.requiredVolunteers - event.numberOfVolunteers}`
        );
      } catch (error) {
        throw new Error(
          `Message ${index} does not contain the number of volunteers needed: ${
            event.requiredVolunteers - event.numberOfVolunteers
          }`
        );
      }
    });
  });

  test("All events in need have a corresponding message", () => {
    try {
      expect(volunteerRecruitmentMessages.length).toBe(
        inNeedOfVolunteers.length
      );
    } catch (error) {
      throw new Error(
        `Expected ${inNeedOfVolunteers.length} messages, got ${volunteerRecruitmentMessages.length} messages instead.`
      );
    }
  });
});
