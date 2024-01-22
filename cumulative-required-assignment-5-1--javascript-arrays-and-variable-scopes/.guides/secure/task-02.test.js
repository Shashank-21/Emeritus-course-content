// task-02.test.js
const path = require("path");
const { initializeCityData, analyzeCityTemperatures } = require(path.join(
  __dirname,
  "../../task-02/task-02.js"
));

describe("analyzeCityTemperatures Function", () => {
  let cityData, results;

  beforeAll(() => {
    cityData = initializeCityData();
    results = analyzeCityTemperatures(cityData);
  });

  test("Returns an array of city analysis objects", () => {
    expect(Array.isArray(results)).toBeTruthy();
    results.forEach((result) => {
      expect(result).toHaveProperty("city");
      expect(result).toHaveProperty("averageTemperature");
      expect(result).toHaveProperty("maxTemperature");
      expect(result).toHaveProperty("minTemperature");
    });
  });

  test("Correctly calculates the average temperature for each city", () => {
    results.forEach((city, index) => {
      const { temperatureData } = cityData[index];
      const { averageTemperature } = city;
      const totalTemperature = temperatureData.reduce(
        (sum, temp) => sum + temp,
        0
      );
      const calculatedAverage = totalTemperature / temperatureData.length;
      expect(averageTemperature).toBeCloseTo(calculatedAverage);
    });
  });

  test("Correctly identifies the maximum temperature for each city", () => {
    results.forEach((city, index) => {
      const { temperatureData } = cityData[index];
      const { maxTemperature } = city;
      const calculatedMax = Math.max(...temperatureData);
      expect(maxTemperature).toBe(calculatedMax);
    });
  });

  test("Correctly identifies the minimum temperature for each city", () => {
    results.forEach((city, index) => {
      const { temperatureData } = cityData[index];
      const { minTemperature } = city;
      const calculatedMin = Math.min(...temperatureData);
      expect(minTemperature).toBe(calculatedMin);
    });
  });
});