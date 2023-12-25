const path = require("path");
const taskDirectory = path.resolve(__dirname, "../task-03");
const { eventsList } = require(path.resolve(taskDirectory, "events.js"));
const { getCompletedEvents, generateStats } = require(path.resolve(
  taskDirectory,
  "task-03.js"
)); // replace with the path to student's solution file

describe("Cleanup Event Analysis", () => {
  let completedEvents,
    totalWasteCollected,
    totalParticipants,
    averageWasteCollectedPerEvent,
    averageWasteCollectedPerParticipant;
  beforeEach(() => {
    completedEvents = getCompletedEvents(eventsList);
    const completedEventsStats = generateStats(completedEvents);
    totalParticipants = completedEventsStats.totalParticipants;
    totalWasteCollected = completedEventsStats.totalWasteCollected;
    averageWasteCollectedPerEvent =
      completedEventsStats.averageWasteCollectedPerEvent;
    averageWasteCollectedPerParticipant =
      completedEventsStats.averageWasteCollectedPerParticipant;
  });
  const expectedCompletedEvents = eventsList.filter(
    (event) => event.eventStatus === "Completed"
  );

  test("Completed events should be filtered correctly", () => {
    try {
      expect(completedEvents).toEqual(expectedCompletedEvents);
    } catch (error) {
      throw new Error(`The completed events are not filtered correctly`);
    }
  });

  test("Total waste collected should be calculated correctly", () => {
    const expectedTotalWaste = expectedCompletedEvents
      .reduce(
        (total, event) =>
          total + parseFloat(event.wasteCollected.split(" ")[0]),
        0
      )
      .toFixed(2);
    try {
      expect(totalWasteCollected).toBeCloseTo(expectedTotalWaste);
    } catch (error) {
      throw new Error(
        `Expected total waste collected to be close to ${expectedTotalWaste} pounds, got ${totalWasteCollected} pounds instead`
      );
    }
  });

  test("Total participants should be calculated correctly", () => {
    const expectedTotalParticipants = expectedCompletedEvents.reduce(
      (total, event) =>
        total + event.organizersContact.length + event.numberOfVolunteers,
      0
    );
    try {
      expect(totalParticipants).toBe(expectedTotalParticipants);
    } catch (error) {
      throw new Error(
        `Expected total participants to be ${expectedTotalParticipants}, got ${totalParticipants} instead`
      );
    }
  });

  test("Average waste collected per event should be calculated correctly", () => {
    const totalWaste = expectedCompletedEvents.reduce(
      (total, event) => total + parseFloat(event.wasteCollected.split(" ")[0]),
      0
    );
    const expectedAverageWastePerEvent = (
      totalWaste / expectedCompletedEvents.length
    ).toFixed(2);
    try {
      expect(averageWasteCollectedPerEvent).toBeCloseTo(
        expectedAverageWastePerEvent
      );
    } catch (error) {
      throw new Error(
        `Expected Average weight per event to be close to ${expectedAverageWastePerEvent} pounds, got ${averageWasteCollectedPerEvent} instead`
      );
    }
  });

  test("Average waste collected per participant should be calculated correctly", () => {
    const totalWaste = expectedCompletedEvents.reduce(
      (total, event) => total + parseFloat(event.wasteCollected.split(" ")[0]),
      0
    );
    const totalParticipants = expectedCompletedEvents.reduce(
      (total, event) =>
        total + event.numberOfVolunteers + event.organizersContact.length,
      0
    );
    const expectedAverageWastePerParticipant = (
      totalWaste / totalParticipants
    ).toFixed(2);
    try {
      expect(averageWasteCollectedPerParticipant).toBeCloseTo(
        expectedAverageWastePerParticipant
      );
    } catch (error) {
      throw new Error(
        `Expected Average weight per participant to be close to ${expectedAverageWastePerParticipant} pounds, got ${averageWasteCollectedPerParticipant} instead`
      );
    }
  });
});
