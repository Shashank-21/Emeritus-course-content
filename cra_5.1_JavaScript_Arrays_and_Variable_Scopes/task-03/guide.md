### Introduction to Task 4: Comparing City Temperatures

#### Overview

In Task 4, you will delve into data comparison across multiple cities based on their average temperatures. This task builds on the skills you've developed in the previous tasks, focusing on analyzing and comparing data from multiple sources.

#### Objective

Your goal in this task is to implement functions that identify the city with the highest and lowest average temperatures from a set of analyzed city temperature data. You will then use these functions in the `compareCityTemperatures` function to return a summary object containing this information.

-----------------------------------------------------------------------------In the Assessment ---------------------------------------------------------------------------------------

#### Task Instructions

1. **Implement `findCityWithHighestAverage` Function**:

   - Write a function that takes an array of city temperature data (`analyzedData`) and finds the city with the highest average temperature.
   - Iterate through the `analyzedData` array to determine which city has the highest average temperature and return the city's name.

2. **Implement `findCityWithLowestAverage` Function**:

   - Similarly, write a function to find the city with the lowest average temperature from the same data.
   - This function should return the name of the city with the lowest average temperature.

3. **Complete `compareCityTemperatures` Function**:
   - Use the above two functions within `compareCityTemperatures` to find and return an object with properties `cityHighestAvg` and `cityLowestAvg`.
   - `cityHighestAvg` should hold the name of the city with the highest average temperature, and `cityLowestAvg` should hold the name of the city with the lowest average temperature.

For each of these functions, you'll be using the `analyzedData` array, which has the following properties:

```javascript
{
   city: 'Name of the city, string',
   averageTemperature: "Average temperature of the city, number",
   maxTemperature: "maximum temperature of the city, number",
   minTemperature: "minimum temperature of the city, number"
 }
```

|||guidance

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
