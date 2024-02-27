### Task: Complete the PostList Component

Your task is to complete the implementation of the `PostList` component that fetches and displays a list of posts using the JSONPlaceholder API. You are provided with starter code that includes placeholders and todos that you need to replace with actual code.

1. **Fetch Posts from the API:**

   - Replace the placeholder `null` with a call to the `fetch` function. Use the provided URL `https://jsonplaceholder.typicode.com/posts` to fetch the posts. Remember to use the `await` keyword for asynchronous operation.

2. **Update Component State with Fetched Data:**

   - After fetching the data and converting it to JSON with `await response.json()`, use the `setPosts` function to update the component's `posts` state with this data.

3. **Pass Props to the Post Component:**
   - In the rendering section of the `PostList` component, ensure each `Post` component receives two props:
     - `key`: A unique identifier for each post, which should be the post's `id`.
     - `post`: The actual post data.

Complete the tasks as described to ensure your `PostList` component functions correctly and displays the list of posts fetched from the API.
