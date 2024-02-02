### Task Instructions

In this task, you'll enhance the `MovieCard` component in `MovieCard.js` file by incorporating dynamic content. The component currently displays a movie's details but lacks specific information: the movie's title and its image URL. Your task is to correctly integrate these pieces of data into the component.

1. **Add the Movie's Title**: Inside the `MovieCard` component, locate the `<h3 className="movie-title">` tag. Replace the placeholder with code that dynamically inserts the movie's title passed as a prop to the component.

2. **Insert the Movie's Image URL**: Find the `style` attribute of the `div` with the class name `movie-header`. Modify its `backgroundImage` property to include the `imageUrl` prop, ensuring the movie's image is displayed as the background.
