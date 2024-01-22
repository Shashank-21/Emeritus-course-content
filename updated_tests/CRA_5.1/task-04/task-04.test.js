// task-04.test.js
const path = require("path");

const { initializeCityData, getHighestAndLowestDays } = require(path.join(
  __dirname,
  "../../task-04/task-04.js"
));

describe("Day with Highest and Lowest Temperature Analysis", () => {
  let cityData;

  beforeAll(() => {
    cityData = initializeCityData();
  });

  test("Correctly identifies the day with the highest temperature for each city", () => {
    const spy = jest.spyOn(console, "log");
    getHighestAndLowestDays(cityData);

    cityData.forEach((city, index) => {
      const highestTemp = Math.max(...city.temperatureData);
      const dayWithHighestTemp = city.temperatureData.indexOf(highestTemp);
      expect(spy.mock.calls[index * 2][0]).toMatch(new RegExp(`${city.city}`));
      expect(spy.mock.calls[index * 2][0]).toMatch(
        new RegExp(`Highest|highest`)
      );
      expect(spy.mock.calls[index * 2][0]).toMatch(
        new RegExp(`${dayWithHighestTemp + 1}`)
      );
    });

    spy.mockRestore();
  });

  test("Correctly identifies the day with the lowest temperature for each city", () => {
    const spy = jest.spyOn(console, "log");
    getHighestAndLowestDays(cityData);

    cityData.forEach((city, index) => {
      const lowestTemp = Math.min(...city.temperatureData);
      const dayWithLowestTemp = city.temperatureData.indexOf(lowestTemp);
      expect(spy.mock.calls[index * 2][0]).toMatch(new RegExp(`${city.city}`));
      expect(spy.mock.calls[index * 2][0]).toMatch(new RegExp(`Lowest|lowest`));
      expect(spy.mock.calls[index * 2 + 1][0]).toMatch(
        new RegExp(`${dayWithLowestTemp + 1}`)
      );
    });

    spy.mockRestore();
  });
});
