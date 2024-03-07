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

	const deleteRecipe = (recipe) => {
		setRecipes(
			recipes.filter((existingRecipe) => {
				return true; // Todo: Replace `true`. The return statement should return true if the recipe's id is not the same as the existingRecipe.id, and false if they are the same.
			})
		);
	};

	return (
		<RecipeContext.Provider
			value={{ recipes, updateRecipe, deleteRecipe, addRecipe }}
		>
			{children}
		</RecipeContext.Provider>
	);
};
