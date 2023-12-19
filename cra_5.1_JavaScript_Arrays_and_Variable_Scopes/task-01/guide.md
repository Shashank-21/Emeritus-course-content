### Task 1: Data Initialization

The first task in this assignment involves initializing weather data for multiple cities. You will create and populate arrays with simulated temperature data, representing a week's worth of weather for each city.

#### Task Description

1. **Function Implementation**: You are required to implement the `generateRandomTemperatureData` function, which will generate random temperature values for a given city within a specified range.

2. **Data Structuring**: Using the `generateRandomTemperatureData` function, you will complete the `initializeCityData` function to create an array of weather data for predefined cities, each containing a week's worth of temperature data.

3. **Focus on Variable Scopes**: Pay close attention to the use of variable scopes. Utilize appropriate scopes (global, local, block) to ensure data integrity and efficient memory usage.

4. **Expected Output**: The `initializeCityData` function should return an array of objects, each object representing a city with its corresponding array of random temperature data.

#### Skills Tested

- Array creation and manipulation
- Function creation and usage
- Understanding and applying variable scopes in JavaScript

-----------------------------------------------------------------------------In the Assessment ---------------------------------------------------------------------------------------

#### Task Instructions

1. **Implement `generateRandomTemperatureData` Function**:

   - Define the function `generateRandomTemperatureData` that takes three parameters:
     - `city`: A string representing the name of the city.
     - `minTemp`: A number representing the minimum temperature for this city.
     - `maxTemp`: A number representing the maximum temperature for this city.
   - Inside the function, create an array to hold 7 random temperature values, one for each day of the week.
   - Generate each temperature as a random integer between `minTemp` and `maxTemp` (inclusive).
   - Return an object containing the `city` name and the array of `temperatureData`.

2. **Complete `initializeCityData` Function**:
   - In the `initializeCityData` function, create an empty array `cityData`.
   - Iterate over the `cities` array. For each city object in the array:
     - Call `generateRandomTemperatureData` with the city's name, `minTemp`, and `maxTemp`.
     - Push the returned object from `generateRandomTemperatureData` into the `cityData` array.
   - Return the `cityData` array, which should now contain the temperature data for each city.

|||guidance

```js
// Implement the 'generateRandomTemperatureData' function here

function generateRandomTemperatureData(city, minTemp, maxTemp) {
  let temperatureData = [];
  for (let i = 0; i < 7; i++) {
    let randomTemperature =
      Math.floor(Math.random() * (maxTemp - minTemp + 1)) + minTemp;
    temperatureData.push(randomTemperature);
  }
  return { city: city, temperatureData: temperatureData };
}

function initializeCityData() {
  let cities = [
    { city: "New York", minTemp: 3, maxTemp: 9 },
    { city: "Los Angeles", minTemp: 13, maxTemp: 24 },
    { city: "Tokyo", minTemp: 5, maxTemp: 18 },
    { city: "Sydney", minTemp: 18, maxTemp: 26 },
    { city: "Moscow", minTemp: -5, maxTemp: 0 },
  ];

  // Implement the rest of the 'initializeCityData' function here
  let cityData = [];
  for (const city of cities) {
    cityData.push(
      generateRandomTemperatureData(city.city, city.minTemp, city.maxTemp)
    );
  }

  return cityData;
}

// Don't change this line
module.exports = initializeCityData;
```

|||
