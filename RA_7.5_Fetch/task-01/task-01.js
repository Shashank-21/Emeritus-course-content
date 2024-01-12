function fetchPosts(url, errorMessage) {
  // Declare a variable 'postsList' to store the value returned from 'fetch'
  // Use `fetch` to fetch the data from the url, and chain on a 'then' function
  // If a bad response gets returned from the url, throw a new Error.
  // Else return the json formatted response(response.json())
  // Once you returned that, chain on another then function, in which you'd return the posts received
  // Finally, chain on a catch block, which catches any error,
  // Return the errorMessage in the catch block
  // Return the value of the 'postList' variable
}
if (typeof module !== "undefined") {
  module.exports = { fetchPosts };
}
