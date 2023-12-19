const { initializeCityData, analyzeCityTemperatures } = require("./task-02.js");

function displayResults() {
  const cityData = initializeCityData();
  const results = analyzeCityTemperatures(cityData);

  console.log("Weather Data Analysis:");
  results.forEach((city) => {
    console.log(`City: ${city.city}`);
    console.log(
      `  Average Temperature: ${city.averageTemperature.toFixed(2)}°C`
    );
    console.log(`  Maximum Temperature: ${city.maxTemperature}°C`);
    console.log(`  Minimum Temperature: ${city.minTemperature}°C`);
    console.log(""); // Adding an empty line for better readability
  });
}

displayResults();

module.exports = { initializeCityData };
