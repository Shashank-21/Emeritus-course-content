const fs = require("fs");

// # # # PATH TO FILE TO CHECK (relative to your project directory)
const filePath = "./mapmarker.js";

// ### LIST OF {pattern, errorMessage} FOR EACH TEST
const patterns = [
  {
    pattern: "mapboxgl.accessToken\\s*=\\s*['\"]pk[^'\"]*['\"]",
    errorMessage: "Add access token",
  },
  { pattern: "mapboxgl\\.Marker\\(\\)", errorMessage: "Create a marker" },
  { pattern: "\\.addTo", errorMessage: "Add marker to map" },
];

// Read file and run tests
fs.readFile(filePath, "utf8", (err, text) => {
  if (err) {
    console.error(`Error reading file: ${err}`);
    return;
  }

  let passed = true;
  patterns.forEach((test, i) => {
    if (!text.match(new RegExp(test.pattern))) {
      passed = false;
      console.log(`Test ${i + 1} failed: ${test.errorMessage}`);
    }
  });

  if (!passed) {
    process.exit(1);
  }

  console.log("Tests passed!");
});
