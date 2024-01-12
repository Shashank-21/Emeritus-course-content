function renderPost(post, postsContainer) {
  const postDiv = document.createElement("div");
  postDiv.classList.add("post");
  postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
  postsContainer.appendChild(postDiv);
}

const postsContainer = document.getElementById("posts");
const errorMessage = [
  {
    title: "Error!",
    body: "There was an error in trying to fetch posts",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  fetchPosts("https://jsonplaceholder.typicode.com/posts", errorMessage).then(
    (posts) => {
      posts
        .forEach((post) => {
          renderPost(post, postsContainer);
        })
        .catch((error) => renderPost(errorMessage, postsContainer));
    }
  );
});
