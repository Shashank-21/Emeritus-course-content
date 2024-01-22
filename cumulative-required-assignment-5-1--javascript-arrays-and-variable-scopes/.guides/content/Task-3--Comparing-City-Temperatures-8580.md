#### Overview

In this task, you will delve into data comparison across multiple cities based on their average temperatures. This task builds on the skills you've developed in the previous tasks, focusing on analyzing and comparing data from multiple sources.

#### Objective

Your goal in this task is to implement functions that identify the city with the highest and lowest average temperatures from a set of analyzed city temperature data. You will then use these functions in the `compareCityTemperatures` function to return a summary object containing this information.


{Check It!|assessment}(test-1039550458)




|||guidance

Solution:

```js
const { initializeCityData } = require("./pre-task.js");

// Implement the calculateAverageTemperature function here
function calculateAverageTemperature(temperatures) {
  let total = 0;
  for (let i = 0; i < temperatures.length; i++) {
    total += temperatures[i];
  }
  return total / temperatures.length;
}

// Implement the findMaxTemperature function here
function findMaxTemperature(temperatures) {
  let maxTemp = temperatures[0];
  for (let i = 1; i < temperatures.length; i++) {
    if (temperatures[i] > maxTemp) {
      maxTemp = temperatures[i];
    }
  }
  return maxTemp;
}

// Implement the findMinTemperature function here
function findMinTemperature(temperatures) {
  let minTemp = temperatures[0];
  for (let i = 1; i < temperatures.length; i++) {
    if (temperatures[i] < minTemp) {
      minTemp = temperatures[i];
    }
  }
  return minTemp;
}

function analyzeCityTemperatures(cityData) {
  // Each item of 'cityData' array is an object that has two properties:
  // city, a string which stores the name of the city, and
  // temperatureData, an array of numbers depicting the daily average temperature
  let results = [];

  for (let i = 0; i < cityData.length; i++) {
    const cityInfo = cityData[i];
    const avgTemp = calculateAverageTemperature(cityInfo.temperatureData);
    const maxTemp = findMaxTemperature(cityInfo.temperatureData);
    const minTemp = findMinTemperature(cityInfo.temperatureData);

    results.push({
      city: cityInfo.city,
      averageTemperature: avgTemp,
      maxTemperature: maxTemp,
      minTemperature: minTemp,
    });
  }

  return results;
}

module.exports = { initializeCityData, analyzeCityTemperatures };
```

|||