// task-03.test.js
const path = require("path");
const {
  initializeCityData,
  analyzeCityTemperatures,
  compareCityTemperatures,
} = require(path.join(__dirname, "../../task-03/task-03.js"));

describe("City Temperature Comparisons", () => {
  let analyzedData;

  beforeAll(() => {
    const cityData = initializeCityData();
    analyzedData = analyzeCityTemperatures(cityData);
  });

  test("Correctly identifies the city with the highest average temperature", () => {
    const { cityHighestAvg } = compareCityTemperatures(analyzedData);
    let highestAvg = -Infinity;
    let expectedCity = "";

    analyzedData.forEach((city) => {
      if (city.averageTemperature > highestAvg) {
        highestAvg = city.averageTemperature;
        expectedCity = city.city;
      }
    });

    expect(cityHighestAvg).toBe(expectedCity);
  });

  test("Correctly identifies the city with the lowest average temperature", () => {
    const { cityLowestAvg } = compareCityTemperatures(analyzedData);
    let lowestAvg = Infinity;
    let expectedCity = "";

    analyzedData.forEach((city) => {
      if (city.averageTemperature < lowestAvg) {
        lowestAvg = city.averageTemperature;
        expectedCity = city.city;
      }
    });

    expect(cityLowestAvg).toBe(expectedCity);
  });
});
