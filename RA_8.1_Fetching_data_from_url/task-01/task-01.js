function fetchCatFacts() {
  // Step 1: Use the fetch API to fetch data from "https://cat-fact.herokuapp.com/facts".
  // The fetch API returns a promise, so you can chain .then() methods to handle the response.
  // Step 2: In the first .then() method, check if the response is okay.
  // If the response is not okay, throw a new Error with the message "Network response was not ok".
  // If the response is okay, return the response converted to JSON using the .json() method.
  // Step 3: Chain another .then() method to handle the JSON data.
  // In this method, use JSON.stringify() to convert the data into a string with proper formatting (null, 2).
  // Step 4: Return the result of the fetch operation.
  // This will be a promise that resolves to the stringified JSON data.
  // Remember to include error handling using a .catch() block after your .then() methods.
}

if (typeof module !== "undefined") {
  module.exports = fetchCatFacts;
}
