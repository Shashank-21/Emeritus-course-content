The first task in this assignment involves initializing weather data for multiple cities. You will create and populate arrays with simulated temperature data, representing a week's weather for each city.

#### Task Description

1. **Function implementation**: Implement the `generateRandomTemperatureData` function, which will generate random temperature values for a given city within a specified range.

2. **Data structuring**: Using the `generateRandomTemperatureData` function, you will complete the `initializeCityData` function to create an array of weather data for predefined cities, with each containing a week's temperature data.

3. **Focus on variable scopes**: Pay close attention to the use of variable scopes. Utilize appropriate scopes (global, local, block) to ensure data integrity and efficient memory usage.

4. **Expected output**: The `initializeCityData` function should return an array of objects, with each representing a city with its corresponding array of random temperature data.

#### Skills Tested

- Array creation and manipulation
- Function creation and usage
- Understanding and applying variable scopes in JavaScript



{Check It!|assessment}(test-3206283866)



|||guidance

Solution:

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
