const {
  initializeCityData,
  analyzeCityTemperatures,
  findCityWithHighestAverage,
  findCityWithLowestAverage,
} = require("./pre-task.js");

function compareCityTemperatures(analyzedData) {
  // Apply the comparison functions `findCityWithHighestAverage` and `findCityWithLowestAverage` to analyzedData
  const cityHighestAvg = findCityWithHighestAverage(analyzedData);
  const cityLowestAvg = findCityWithLowestAverage(analyzedData);

  // return an object with properties `cityHighestAvg` and `cityLowestAvg`
  return {
    cityHighestAvg: cityHighestAvg,
    cityLowestAvg: cityLowestAvg,
  };
}

// Don't change this line
module.exports = {
  initializeCityData,
  analyzeCityTemperatures,
  compareCityTemperatures,
};
