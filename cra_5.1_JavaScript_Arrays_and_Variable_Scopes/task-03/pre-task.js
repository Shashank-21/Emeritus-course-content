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

  let cityData = [];
  for (const city of cities) {
    cityData.push(
      generateRandomTemperatureData(city.city, city.minTemp, city.maxTemp)
    );
  }

  return cityData;
}

function calculateAverageTemperature(temperatures) {
  let total = 0;
  for (let i = 0; i < temperatures.length; i++) {
    total += temperatures[i];
  }
  return total / temperatures.length;
}

function findMaxTemperature(temperatures) {
  let maxTemp = temperatures[0];
  for (let i = 1; i < temperatures.length; i++) {
    if (temperatures[i] > maxTemp) {
      maxTemp = temperatures[i];
    }
  }
  return maxTemp;
}

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
