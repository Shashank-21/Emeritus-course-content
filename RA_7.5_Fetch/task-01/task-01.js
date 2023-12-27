function renderPost(post, postsContainer) {
  const postDiv = document.createElement("div");
  postDiv.classList.add("post");
  postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
  postsContainer.appendChild(postDiv);
}

function fetchPosts(url, postsContainer, errorMessage) {
  // Use `fetch` to fetch the data from the url, and chain on a 'then' function
  // If a bad response gets returned from the url, throw a new Error.
  // Else return the json formatted response(response.json())
  // Once you returned that, chain on another then function, in which you'd loop over posts
  // And for each post, run the function `renderPost`.
  // The renderPost function takes in the post as the first argument and postsContainer as the second argument.
  // Finally, chain on a catch block, which catches any error,
  // And run the `renderPost` function with `errorMessage` and `postsContainer` as its arguments.
  // Also, include a console.error, with an error message.
}
if (typeof module !== "undefined") {
  module.exports = { renderPost, fetchPosts };
}
