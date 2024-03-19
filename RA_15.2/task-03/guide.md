### Task 3: Implement Dynamic Pagination in a React Application

#### Objective

Implement dynamic pagination in a React application that displays a list of Pokémon. The application fetches Pokémon data from the PokeAPI, and your task is to enhance it with pagination functionality to allow users to navigate through different pages of Pokémon.

#### Instructions

1. **Calculate Offset for API Request**
   - Modify the `fetchPokemons` async function to calculate the `offset` using the current page number and the predefined limit of items (Pokémon) per page. The `offset` parameter gives the id or the serial number of the first item that needs to be fetched from the api. The formula for the offset is `(currentPage - 1) * limit`.
   - Update the API request URL to include both the `limit` and the newly calculated `offset` as query parameters. This adjustment ensures that the application fetches the correct segment of Pokémon data corresponding to the selected page.
