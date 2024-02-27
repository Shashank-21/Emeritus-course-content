### Task Instructions

**Objective:** Your goal is to complete the functionality of the `fetchPokemons` function inside the `App` component. This function should fetch data from the PokeAPI, process it, and then update the state of the application to display a list of Pokémon.

**Background:** An asynchronous operation is one that allows the computer to "move on" to other tasks while waiting for the asynchronous operation to complete. The `fetch` function in JavaScript is used to make network requests to retrieve resources from a server, in this case, the PokeAPI. This function is asynchronous and returns a promise that resolves to the response to that request, once it is completed.

**Instructions:**

1. **Fetching Data from an API:**

   - Use the `fetch` function to initiate a GET request to the URL provided. The syntax looks like this:
     ```javascript
     const response = await fetch('URL_GOES_HERE');
     ```
     For example, if we were fetching user data from a hypothetical API, we might write:
     ```javascript
     const userResponse = await fetch('https://api.example.com/users');
     ```
     In your task, replace `'URL_GOES_HERE'` with the provided PokeAPI URL.

2. **Processing the JSON Response:**

   - After fetching the data, the next step is to convert the raw response into a JSON object. The `response` object has a method called `.json()` that does this. Here is how you would generally use it:
     ```javascript
     const data = await response.json();
     ```
     For example, if we were processing the fetched user data, it would look like this:
     ```javascript
     const userData = await userResponse.json();
     ```
     Apply this to the response you obtained from the PokeAPI.

3. **Updating State with Fetched Data:**
   - Finally, use the React state setter function to update your component's state with the new data. The general syntax for setting state is:
     ```javascript
     setState(newValue);
     ```
     For instance, if we had a state variable for users and a setter function named `setUsers`, we would update the state like this:
     ```javascript
     setUsers(userData);
     ```
     In your case, you will update the `pokemons` state with the `results` property from the `data` object. (`data.results`)

**Expected Outcome:**

Upon successful completion of these steps, your application should be able to fetch the list of Pokémon from the PokeAPI and store it in the `pokemons` state variable. This will enable the `PokemonList` component to render the list dynamically on the page.

**Note:** Remember to handle the asynchronous nature of the `fetch` function correctly using `await` within an `async` function, and ensure that you are catching any potential errors that may arise during the fetch operation.

**Completion:** You will know that you have completed the task correctly when the list of Pokémon is displayed on your application's webpage after the data is fetched from the PokeAPI.
