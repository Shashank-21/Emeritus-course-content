Got it! If the students are only working on the `task-02.js` file and not `app.js`, the instructions will focus solely on implementing the required functions in `task-02.js`. Here are the revised instructions:

### Task 2: Temperature AnalysisObjective

Your task is to implement functions in the `task-02.js` file that will analyze temperature data for a set of cities. This involves calculating the average, maximum, and minimum temperatures for each city based on a week's worth of data.

-----------------------------------------------------------------------------In the Assessment ---------------------------------------------------------------------------------------

#### Task Instructions

1. **Implement `calculateAverageTemperature` Function**:

   - Write a function named `calculateAverageTemperature` that takes an array of temperatures and returns the average temperature.
   - Use a loop to sum up all the temperatures in the array, then divide by the number of temperatures to find the average.

2. **Implement `findMaxTemperature` Function**:

   - Write a function named `findMaxTemperature` that takes an array of temperatures and returns the highest temperature.
   - Use a loop to find the maximum temperature in the array.

3. **Implement `findMinTemperature` Function**:

   - Write a function named `findMinTemperature` that takes an array of temperatures and returns the lowest temperature.
   - Use a loop to find the minimum temperature in the array.

4. **Use the Functions in `analyzeCityTemperatures`**:
   - The `analyzeCityTemperatures` takes in one argument, `cityData`, which is the output of the `initializeCityData` you had worked on in task 1.
   - For each city, calculate the average, maximum, and minimum temperatures using your newly created functions.
   - Return an array of objects, each containing the city name and its calculated temperature values. Each object should be of the form:
     ```js
     {
      city: 'City name, string',
      averageTemperature: 'Calculated average temperature, number',
      minTemperature: 'Calculated maximum temperature, number',
      maxTemperature: 'Calculated minimum temperature, number',
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
