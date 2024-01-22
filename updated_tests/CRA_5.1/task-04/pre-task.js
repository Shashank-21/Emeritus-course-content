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

module.exports = initializeCityData;
