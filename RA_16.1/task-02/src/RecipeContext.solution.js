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
				if (existingRecipe.id === recipe.id) {
					return recipe;
				}
				return existingRecipe;
			})
		);
	};

	return (
		<RecipeContext.Provider value={{ recipes, updateRecipe, addRecipe }}>
			{children}
		</RecipeContext.Provider>
	);
};
