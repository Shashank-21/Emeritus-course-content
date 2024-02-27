### Task 2 Instructions: Implement Pagination in Your Pokémon App

#### Objective:

Your task is to modify the existing React application to implement pagination, allowing users to view Pokémon in batches of 10 at a time. This will enhance the user experience by reducing the amount of data loaded and displayed on the screen at once.

#### Specific Task:

Inside the `useEffect` hook in `App.js`, you will find a `fetch` call to the Pokémon API with a `limit` parameter set to 1500. Your task is to modify this `limit` parameter to 10, which will limit the number of Pokémon fetched at a time to 10.

#### Steps:

1. Locate the `fetchPokemons` function within the `useEffect` hook in `App.js`.
2. Identify the URL being used to fetch Pokémon data: `https://pokeapi.co/api/v2/pokemon?limit=1500`.
3. Modify the `limit` query parameter in the URL from `1500` to `10`. This change will ensure that your application fetches only 10 Pokémon at a time.
4. Ensure that the fetched data is correctly set to your component's state and passed to the `PokemonList` component for rendering.
