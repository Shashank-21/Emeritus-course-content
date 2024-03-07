import React from 'react';
import './App.css';
import { RecipeProvider } from './RecipeContext';
import AddRecipe from './AddRecipe';
import RecipeList from './RecipeList';

const App = () => {
	return (
		<RecipeProvider>
			<div>
				<h1>My Recipe App</h1>
				<AddRecipe />
				<RecipeList />
			</div>
		</RecipeProvider>
	);
};

export default App;
