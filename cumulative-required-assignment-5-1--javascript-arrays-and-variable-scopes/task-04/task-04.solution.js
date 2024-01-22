const {
  initializeCityData,
  findDayWithHighestTemperature,
  findDayWithLowestTemperature,
} = require("./pre-task.js");

function getHighestAndLowestDays(cityData) {
  // Loop over city data
  // Each item of 'cityData' array is an object that has two properties:
  // city, a string which stores the name of the city, and
  // temperatureData, an array of numbers depicting the daily average temperature
  for (let i = 0; i < cityData.length; i++) {
    // Implement the functions 'findDayWithHighestTemperature' and 'findDayWithLowestTemperature' with the 'temperatureData' array as its argument
    const dayWithHighestTemp = findDayWithHighestTemperature(
      cityData[i].temperatureData
    );
    const dayWithLowestTemp = findDayWithLowestTemperature(
      cityData[i].temperatureData
    );

    // Log the result for each city to the console
    console.log(
      `${cityData[i].city} had its highest temperature on day ${
        dayWithHighestTemp + 1
      }`
    );
    console.log(
      `${cityData[i].city} had its lowest temperature on day ${
        dayWithLowestTemp + 1
      }`
    );
  }
}

// Don't change this line
module.exports = { initializeCityData, getHighestAndLowestDays };
