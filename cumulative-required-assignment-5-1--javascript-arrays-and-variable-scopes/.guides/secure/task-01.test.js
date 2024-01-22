const path = require("path");
const initializeCityData = require(path.join(
  __dirname,
  "../../task-01/task-01.js"
));

describe("City Data Initialization", () => {
  let cityData;

  beforeAll(() => {
    cityData = initializeCityData();
  });

  test("City data array contains correct number of cities", () => {
    expect(cityData.length).toBe(5);
  });

  test("Each city has a name and an array of 7 temperatures", () => {
    cityData.forEach((city) => {
      expect(city).toHaveProperty("city");
      expect(city.temperatureData).toHaveLength(7);
    });
  });

  test("Temperatures are within the specified range for each city", () => {
    const expectedRanges = {
      "New York": { min: 3, max: 9 },
      "Los Angeles": { min: 13, max: 24 },
      Tokyo: { min: 5, max: 18 },
      Sydney: { min: 18, max: 26 },
      Moscow: { min: -5, max: 0 },
    };

    cityData.forEach((city) => {
      city.temperatureData.forEach((temp) => {
        expect(temp).toBeGreaterThanOrEqual(expectedRanges[city.city].min);
        expect(temp).toBeLessThanOrEqual(expectedRanges[city.city].max);
      });
    });
  });
});
// const path = require("path");
// const initializeCityData = require(path.join(
//   __dirname,
//   "../../task-01/task-01.js"
// ));

// describe("City Data Initialization", () => {
//   let cityData;

//   beforeAll(() => {
//     cityData = initializeCityData();
//   });

//   test("City data array contains correct number of cities", () => {
//     expect(cityData.length).toBe(5);
//   });

//   test("Each city has a name and an array of 7 temperatures", () => {
//     cityData.forEach((city) => {
//       expect(city).toHaveProperty("city");
//       expect(city.temperatureData).toHaveLength(7);
//     });
//   });

//   test("Temperatures are within the specified range for each city", () => {
//     const expectedRanges = {
//       "New York": { min: 3, max: 9 },
//       "Los Angeles": { min: 13, max: 24 },
//       Tokyo: { min: 5, max: 18 },
//       Sydney: { min: 18, max: 26 },
//       Moscow: { min: -5, max: 0 },
//     };

//     cityData.forEach((city) => {
//       city.temperatureData.forEach((temp) => {
//         expect(temp).toBeGreaterThanOrEqual(expectedRanges[city.city].min);
//         expect(temp).toBeLessThanOrEqual(expectedRanges[city.city].max);
//       });
//     });
//   });
// });