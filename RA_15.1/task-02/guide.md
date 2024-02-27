### Task: Complete the Post Component

Your task is to complete the implementation of the `Post` component (in the file `Post.js`) that fetches and displays comments for a given post using the JSONPlaceholder API. The starter code includes placeholders and todos that you need to replace with actual code.

### Specific Tasks:

1. **Fetch Comments from the API:**

   - Replace the placeholder `null` with a call to the `fetch` function. Use the provided URL template `https://jsonplaceholder.typicode.com/posts/{postId}/comments`, replacing `{postId}` with the actual post ID, to fetch the comments. Ensure you use the `await` keyword for asynchronous operation.

2. **Update Component State with Fetched Data:**

   - After fetching the data and converting it to JSON with `await response.json()`, use the `setComments` function to update the component's `comments` state with this data.

3. **Pass Props to the Comment Component:**
   - In the rendering section of the `Post` component, ensure each `Comment` component receives two props:
     - `key`: A unique identifier for each comment, which should be the comment's `id`.
     - `comment`: The actual comment data.

Complete the tasks as described to ensure your `Post` component functions correctly and displays the list of comments fetched from the API upon user interaction.
