const postsContainer = document.getElementById("posts");
const errorMessage = [
  {
    title: "Error!",
    body: "There was an error in trying to fetch posts",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const posts = fetchPosts(
    "https://jsonplaceholder.typicode.com/posts",
    postsContainer,
    errorMessage
  );
  posts.forEach((post) => {
    renderPost(post);
  });
});
