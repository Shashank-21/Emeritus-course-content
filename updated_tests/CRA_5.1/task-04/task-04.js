const initializeCityData = require("./pre-task.js");

// Implement the findDayWithHighestTemperature function here
function findDayWithHighestTemperature(temperatureData) {
  let highestTemp = temperatureData[0];
  let dayIndex = 0;
  for (let i = 0; i < temperatureData.length; i++) {
    if (temperatureData[i] > highestTemp) {
      highestTemp = temperatureData[i];
      dayIndex = i;
    }
  }
  return dayIndex;
}

// Implement the findDayWithLowestTemperature function here
function findDayWithLowestTemperature(temperatureData) {
  let lowestTemp = temperatureData[0];
  let dayIndex = 0;
  for (let i = 0; i < temperatureData.length; i++) {
    if (temperatureData[i] < lowestTemp) {
      lowestTemp = temperatureData[i];
      dayIndex = i;
    }
  }
  return dayIndex;
}

function getHighestAndLowestDays(cityData) {
  // Loop over city data
  // Each item of 'cityData' array is an object that has two properties:
  // city, a string which stores the name of the city, and
  // temperatureData, an array of numbers depicting the daily average temperature
  // Implement the functions 'findDayWithHighestTemperature' and 'findDayWithLowestTemperature' with the 'temperatureData' array as its argument
  // Log the result for each city to the console
  for (let i = 0; i < cityData.length; i++) {
    const dayWithHighestTemp = findDayWithHighestTemperature(
      cityData[i].temperatureData
    );
    const dayWithLowestTemp = findDayWithLowestTemperature(
      cityData[i].temperatureData
    );
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

module.exports = { initializeCityData, getHighestAndLowestDays };
