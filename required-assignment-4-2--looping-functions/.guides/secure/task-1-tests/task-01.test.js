const fs = require("fs");
const chai = require("chai");
const assert = chai.assert;

const basePath = `/home/codio/workspace`;

const filePath = `${basePath}/task-01/task-01.js`;

const { generateAisleLabels } = require(filePath);

describe("Grocery Assistant Aisle Label test", () => {
  it("Aisle Label test", () => {
    const testNumberOfAisles = 8;
    const aisleNames = [
      "Fruits",
      "Vegetables",
      "Dairy",
      "Bakery",
      "Beverages",
      "Meat",
      "Seafood",
      "Frozen Foods",
      "Snacks",
      "Cereals",
    ];

    const aisles = generateAisleLabels(testNumberOfAisles)
      .split("\n")
      .filter((aisle) => aisle.length);

    assert.equal(
      aisles.length,
      testNumberOfAisles,
      `Expected ${testNumberOfAisles} aisles, but found ${aisles.length}`
    );

    aisles.forEach((aisleText, index) => {
      const [aisleNumber, aisleName] = aisleText.split(": ");

      assert.equal(
        aisleNumber,
        `Aisle ${index + 1}`,
        `Aisle ${
          index + 1
        } doesn't have the right aisle number mentioned. It should be 'Aisle ${
          index + 1
        }'. Instead it is ${aisleNumber}`
      );
      assert.include(
        aisleNames,
        aisleName,
        `Aisle ${index + 1} does not have a name in the list ${JSON.stringify(
          aisleNames
        )}`
      );
    });
  });
});
