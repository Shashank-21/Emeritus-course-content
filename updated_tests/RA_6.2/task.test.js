const fs = require("fs");

// # # # PATH TO FILE TO CHECK (relative to your project directory)
const filePath = "/home/codio/workspace/task/mapmarker.js";

// ### LIST OF {pattern, errorMessage} FOR EACH TEST
const patterns = [
  {
    pattern: "mapboxgl.accessToken\\s*=\\s*['\"]pk[^'\"]*['\"]",
    errorMessage: "Please add the access token to the mapboxgl object",
  },
  {
    pattern: "mapboxgl\\.Marker\\(\\)",
    errorMessage: "Please call the `Marker` function in the mapboxgl object",
  },
  {
    pattern: "\\.addTo",
    errorMessage:
      "Did you call the `addTo` function with `map` as the argument?",
  },
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
