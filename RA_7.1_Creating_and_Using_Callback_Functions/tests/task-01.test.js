const path = require("path");
const taskDirectory = path.resolve(__dirname, "../task-01");
const { eventsList } = require(path.resolve(taskDirectory, "events.js"));
const { filterEventsWhichNeedVolunteers } = require(path.resolve(
  taskDirectory,
  "task-01.js"
));

describe("Event Volunteers Management", () => {
  let inNeedOfVolunteers;
  beforeEach(() => {
    inNeedOfVolunteers = filterEventsWhichNeedVolunteers(eventsList);
  });
  test("Correct number of events in need of volunteers identified", () => {
    const manualCount = eventsList.reduce((count, event) => {
      return (
        count + (event.numberOfVolunteers < event.requiredVolunteers ? 1 : 0)
      );
    }, 0);
    try {
      expect(inNeedOfVolunteers.length).toBe(manualCount);
    } catch (error) {
      throw new Error(
        `Expected ${manualCount} events to be in need of volunteers, but got ${inNeedOfVolunteers.length} instead.`
      );
    }
  });

  test("Events in need of volunteers are correctly identified", () => {
    try {
      expect(inNeedOfVolunteers.length).toBeGreaterThan(0);
    } catch (error) {
      throw new Error(`There are no events in the 'inNeedOfVolunteers' array`);
    }
    inNeedOfVolunteers.forEach((event, index) => {
      try {
        expect(event.numberOfVolunteers).toBeLessThan(event.requiredVolunteers);
      } catch (error) {
        throw new Error(
          `Expected event at index ${index} to need more volunteers, but the event has the same number of volunteers as it's required.`
        );
      }
    });
  });
});
