function fetchPosts(url, errorMessage) {
  // Declare a variable 'postsList' to store the value returned from 'fetch'
  // Use `fetch` to fetch the data from the url, and chain on a 'then' function
  const postList = fetch(url)
    .then((response) => {
      // If a bad response gets returned from the url, throw a new Error.
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Else return the json formatted response(response.json())
      return response.json();
    })
    // Once you returned that, chain on another then function, in which you'd return the posts received
    .then((posts) => {
      return posts;
    })
    // Finally, chain on a catch block, which catches any error,
    .catch((error) => {
      // Return the errorMessage in the catch block
      return errorMessage;
    });
  // Return the value of the 'postList' variable
  return postList;
}
if (typeof module !== "undefined") {
  module.exports = { fetchPosts };
}
