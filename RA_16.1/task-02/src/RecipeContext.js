import React, { createContext, useState } from 'react';

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
	const [recipes, setRecipes] = useState([]);

	const addRecipe = (recipe) => {
		setRecipes([...recipes, recipe]);
	};

	const updateRecipe = (recipe) => {
		setRecipes(
			recipes.map((existingRecipe) => {
				// Todo: Check if the id of the `recipe` is the same as the id of the `existingRecipe`. If yes, return recipe. Else, return existingRecipe
			})
		);
	};

	return (
		<RecipeContext.Provider value={{ recipes, updateRecipe, addRecipe }}>
			{children}
		</RecipeContext.Provider>
	);
};
