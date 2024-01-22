#### Task Instructions

**Implement the `analyzeCityTemperatures` function**:

- The `analyzeCityTemperatures` takes one argument, `cityData`, which is the output of the `initializeCityData` you worked on in Task 1.
- For each city, calculate the average, maximum, and minimum temperatures using the functions imported from `pre-task.js`.
- Return an array of objects, with each containing the city name and its calculated temperature values. Each object should be in the form of:
  ```js
  {
   city: 'City name, string',
   averageTemperature: 'Calculated average temperature, number',
   minTemperature: 'Calculated maximum temperature, number',
   maxTemperature: 'Calculated minimum temperature, number',
  }
  ```
