const path = require("path");
const taskDirectory = path.resolve(__dirname, "../task-03");
const { eventsList } = require(path.resolve(taskDirectory, "events.js"));
const { getFutureEvents } = require(path.resolve(taskDirectory, "task-04.js")); // Replace this with the path to student’s solution file

describe("Sorting future events", () => {
  let futureEvents;
  beforeEach(() => {
    futureEvents = getFutureEvents(eventsList);
  });
  const expectedFutureEvents = eventsList
    .filter((event) => event.eventStatus === "Yet to Start")
    .sort((event, nextEvent) => {
      const eventMilliseconds = new Date(event.date).getTime();
      const nextEventMilliseconds = new Date(nextEvent.date).getTime();
      return eventMilliseconds - nextEventMilliseconds;
    });

  it('should include all events marked as "Yet to Start" in the future events', () => {
    try {
      expect(futureEvents).toEqual(expectedFutureEvents);
    } catch (error) {
      throw new Error("The futureEvents array is not sorted correctly");
    }
  });
});
