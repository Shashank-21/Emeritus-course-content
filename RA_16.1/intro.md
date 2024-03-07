### Assignment Introduction:

In this assignment, you are tasked with enhancing the functionality of a Recipe Sharing Application by implementing three crucial operations: adding, updating, and deleting recipes. The application utilizes React's Context API to manage the application's state, allowing for a seamless and efficient way to propagate state changes across the entire application. You'll be working within the `RecipeProvider` context to implement these functionalities, ensuring that recipes can be added, modified, and removed dynamically.

### Assignment Instructions:

#### Overview:

You will focus on three main tasks within the `RecipeProvider` component:

1. **Implement `addRecipe`:** Develop the logic to add new recipes to the global state.
2. **Implement `updateRecipe`:** Create the functionality to modify existing recipes.
3. **Implement `deleteRecipe`:** Enable the deletion of recipes from the global state.

#### Task Details:

1. **Add Recipe (`addRecipe` Function):**

   - Flesh out the `addRecipe` function to insert a new recipe into the `recipes` array in the state.
   - Ensure that each recipe added has a unique identifier so it can be easily manipulated or removed later.

2. **Update Recipe (`updateRecipe` Function):**

   - Implement the `updateRecipe` function to modify an existing recipe in the `recipes` array.
   - This function should identify the recipe to update based on its unique identifier and apply the updates to the correct recipe object.

3. **Delete Recipe (`deleteRecipe` Function):**
   - Complete the `deleteRecipe` function to remove a recipe from the `recipes` array.
   - Similar to `updateRecipe`, this function should find the recipe by its identifier and remove it from the global state.
