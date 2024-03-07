### Task Instructions:

Your task is to complete the implementation of the `updateRecipe` function in the `RecipeContext.js` file. The function's structure is already in place, but the logic to update a recipe based on its ID is missing.

1. Inside the `updateRecipe` function, you will find a `map` method being applied to the `recipes` array. This method is intended to create a new array by checking each `existingRecipe` against the `recipe` that needs to be updated.

2. Complete the logic inside the `map` method:
   - Implement a condition to check if the `id` of the `existingRecipe` matches the `id` of the `recipe` passed to the `updateRecipe` function.
   - If the `id` matches, the function should return the new `recipe` object, as this is the recipe that needs to be updated.
   - If the `id` does not match, the function should return the `existingRecipe` as is, since no changes are required for this recipe.
