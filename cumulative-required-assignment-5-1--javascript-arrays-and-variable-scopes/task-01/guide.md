#### Task Instructions

**Complete `initializeCityData` Function**:

- In the `initializeCityData` function, create an empty array `cityData`.
- Iterate over the `cities` array. For each city object in the array:
  - Call `generateRandomTemperatureData` with the city's name, `minTemp`, and `maxTemp`.
  - Push the returned object from `generateRandomTemperatureData` into the `cityData` array.
- Return the `cityData` array, which should now contain the temperature data for each city.
