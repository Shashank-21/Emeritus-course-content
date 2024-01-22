#### Overview

This task focuses on determining specific days that experienced the highest and lowest temperatures in various cities. This task is designed to enhance your skills in analyzing and interpreting temperature data, a key aspect of data processing and analytics.

#### Objective

Your goal is to implement functions that identify the specific days with the highest and lowest temperatures for each city. You will then apply these functions to an array of city temperature data, logging the results to the console.


{Check It!|assessment}(test-3463532073)

|||guidance

Solution: 

```js
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
```

|||