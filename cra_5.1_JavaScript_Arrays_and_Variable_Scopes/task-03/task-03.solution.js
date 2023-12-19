const {
  initializeCityData,
  analyzeCityTemperatures,
} = require("./pre-task.js");

function findCityWithHighestAverage(analyzedData) {
  let highestAvg = -Infinity;
  let cityWithHighestAvg = "";
  for (let i = 0; i < analyzedData.length; i++) {
    if (analyzedData[i].averageTemperature > highestAvg) {
      highestAvg = analyzedData[i].averageTemperature;
      cityWithHighestAvg = analyzedData[i].city;
    }
  }
  return cityWithHighestAvg;
}

function findCityWithLowestAverage(analyzedData) {
  let lowestAvg = Infinity;
  let cityWithLowestAvg = "";
  for (let i = 0; i < analyzedData.length; i++) {
    if (analyzedData[i].averageTemperature < lowestAvg) {
      lowestAvg = analyzedData[i].averageTemperature;
      cityWithLowestAvg = analyzedData[i].city;
    }
  }
  return cityWithLowestAvg;
}

function compareCityTemperatures(analyzedData) {
  const cityHighestAvg = findCityWithHighestAverage(analyzedData);
  const cityLowestAvg = findCityWithLowestAverage(analyzedData);
  return { cityHighestAvg: cityHighestAvg, cityLowestAvg: cityLowestAvg };
}

module.exports = {
  initializeCityData,
  analyzeCityTemperatures,
  compareCityTemperatures,
};
