# Assignment: Fetch and Paginate Data

## Introduction

In the modern web, handling data efficiently is crucial for creating responsive and user-friendly applications. This assignment focuses on two essential skills for any React developer: fetching data from an API and implementing pagination to manage and navigate through large datasets. You will build a React application that fetches data from an external API and displays it in a paginated format.

## Objectives

Your task is to create a React application that displays a list of items fetched from the Pokémon API. The application should allow users to navigate through the items using pagination controls. This will require you to:

1. **Fetch Data**: Retrieve data from the Pokémon API using asynchronous requests.
2. **Implement Pagination**: Allow users to navigate through the data in chunks (pages), reducing the amount of data loaded and displayed at one time.

## Requirements

- **React Setup**: Create a new React application using Create React App.
- **API Integration**: Use the Pokémon API (https://pokeapi.co/) to fetch a list of Pokémon. You should display the name of each Pokémon on the current page.
- **Pagination Controls**: Implement pagination controls below the list. Users should be able to navigate to the next and previous pages, as well as jump to specific pages.
- **State Management**: Manage the state of the current page and fetched data using React's `useState` and `useEffect` hooks.
- **Error Handling**: Gracefully handle any errors that occur during the API request, displaying a user-friendly message if the data fails to load.
- **Styling**: Apply basic styling to your application to improve usability. You are free to use plain CSS, CSS modules, or any CSS-in-JS solution you prefer.
