In this assignment, you will gain hands-on experience with fetching data from a remote server using JavaScript's Fetch API and dynamically rendering this data in the DOM. You will work with a mock API, [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts), to retrieve and display posts. This exercise will help you understand how to handle asynchronous operations and manipulate the DOM based on fetched data.

#### Objective

Your task is to create a webpage that fetches a list of posts from JSONPlaceholder and displays each post on the page. You will write JavaScript code to fetch the data, handle potential errors, and render the posts in the DOM.

### Task instructions

1. Completing the `fetchPosts` Function:
   You are provided with a starter code that has the fetchPosts function partially implemented. Your task is to complete this function based on the provided solution code.

   - Use the Fetch API to fetch data from the given URL.
   - Upon successfully fetching the data, parse it as JSON, and then loop through the resulting array of posts.
   - For each post, call the renderPost function, passing in the post object and the container element for posts.

2. Error Handling:
   Implement error handling within the fetchPosts function.
   - In case of a failed fetch operation (e.g., network error, bad response), catch the error.
   - Display a user-friendly error message when an error occurs. This message is provided to the fetchPosts function as an argument.
