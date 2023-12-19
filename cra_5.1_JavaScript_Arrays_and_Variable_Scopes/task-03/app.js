const {
  initializeCityData,
  analyzeCityTemperatures,
  compareCityTemperatures,
} = require("./task-03.js");
const cityData = initializeCityData();
const analyzedData = analyzeCityTemperatures(cityData);
const { cityHighestAvg, cityLowestAvg } = compareCityTemperatures(analyzedData);

console.log(`City with highest average temperature: ${cityHighestAvg}`);
console.log(`City with lowest average temperature: ${cityLowestAvg}`);
