const chai = require('chai');
const assert = chai.assert;

const basePath = `/home/codio/workspace`;

const filePath = `${basePath}/task-02/task-02.js`;

const { restockShelves } = require(filePath);

describe('Grocery Assistant Restocking test', () => {
    it('Restocking test', () => {
        const testCases = [];
        for (let i = 1; i <= 3; i++) {
            const testTotalItems = Math.floor(Math.random() * 500) + 1;
            const testItemsPerTrip = Math.floor(Math.random() * 25) + 1;
            const expectedNumberOfTrips = Math.ceil(testTotalItems / testItemsPerTrip);
            const expectedItemsInLastTrip = testTotalItems % testItemsPerTrip === 0 ? testItemsPerTrip : testTotalItems % testItemsPerTrip;
            testCases.push({
                testTotalItems,
                testItemsPerTrip,
                expectedNumberOfTrips,
                expectedItemsInLastTrip
            });
        }

        testCases.forEach((testCase, index) => {
            const {
                testTotalItems,
                testItemsPerTrip,
                expectedNumberOfTrips,
                expectedItemsInLastTrip
            } = testCase;

            const result = restockShelves(testTotalItems, testItemsPerTrip);

            const regex = /Trip (\d+): Restocked (\d+) items\./g;
            const values = [];
            let matchResult;

            while ((matchResult = regex.exec(result)) !== null) {
              const tripNumber = matchResult[1];
              const itemsRestocked = matchResult[2];
              values.push({ tripNumber, itemsRestocked });
            }


            assert.equal(values.length, expectedNumberOfTrips, `Test case ${index + 1}: Expected ${expectedNumberOfTrips} trips, but found ${values}`);
            assert.equal(values[values.length - 1].itemsRestocked, expectedItemsInLastTrip, `Test case ${index + 1}: Expected the last trip to contain ${expectedItemsInLastTrip} items, but found ${values[values.length - 1].itemsRestocked}`);
        });
    });
});
