In this assignment, you will utilize JavaScript's Fetch API to retrieve data from a remote server and display it on a webpage. This assignment is designed to enhance your understanding of asynchronous JavaScript, API interactions, and basic data handling.

#### Objective

Your goal in this task is to fetch a list of cat facts from the [Cat Facts API][https://cat-fact.herokuapp.com/facts] and display the stringified JSON data on your webpage. This exercise will give you practical experience with making network requests and handling the response in JavaScript.

#### Task Instructions

1. **Implement the Fetch Operation**:

   - Write a function named `fetchCatFacts` in your JavaScript file.
   - Use the `fetch` API to retrieve data from `"https://cat-fact.herokuapp.com/facts"`.
   - Ensure that the function returns a Promise containing the fetched data.

2. **Handle the Response**:

   - In the `.then()` method of the fetch call, check if the HTTP response is successful.
   - If the response is not successful, throw an error with a meaningful message.
   - If the response is successful, parse the JSON data and return it in a stringified format for display, using the `JSON.stringify()` function

3. **Error Handling**:

   - Implement a `.catch()` block to gracefully handle any network or parsing errors.
   - Log the error to the console or display an error message on the webpage.
