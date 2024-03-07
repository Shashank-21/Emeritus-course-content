import React, { createContext, useState } from 'react';

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
	const [recipes, setRecipes] = useState([]);

	const addRecipe = (recipe) => {
		// Todo: Change the `recipes` state to include the recipe that has been passed into the function.
	};

	return (
		<RecipeContext.Provider value={{ recipes, addRecipe }}>
			{children}
		</RecipeContext.Provider>
	);
};
