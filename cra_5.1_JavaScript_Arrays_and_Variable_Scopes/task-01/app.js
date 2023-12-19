const initializeCityData = require("./task-01.js");
let allCitiesData = initializeCityData();
console.log("Weather Data for Cities:");
allCitiesData.forEach((cityData, index) => {
  console.log(`City ${index + 1}:`, cityData);
});
