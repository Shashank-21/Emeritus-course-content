import React, { useContext } from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { RecipeContext, RecipeProvider } from '../src/RecipeContext';

const TestComponent = () => {
	const { recipes, addRecipe, deleteRecipe } = useContext(RecipeContext);

	return (
		<div>
			<button
				data-testid="addRecipe"
				onClick={() => addRecipe({ id: 1, name: 'Recipe 1' })}
			>
				Add Recipe
			</button>
			<button
				data-testid="deleteRecipe"
				onClick={() => deleteRecipe({ id: 1 })}
			>
				Delete Recipe
			</button>
			{recipes.map((recipe, index) => (
				<div key={index} data-testid="recipe">
					{recipe ? recipe.name : 'Recipe missing'}
				</div>
			))}
		</div>
	);
};

describe('RecipeProvider', () => {
	beforeEach(() => {
		render(
			<RecipeProvider>
				<TestComponent />
			</RecipeProvider>
		);
	});

	it('should delete a recipe', async () => {
		fireEvent.click(screen.getByTestId('addRecipe'));
		expect(screen.getByText('Recipe 1')).toBeInTheDocument();

		fireEvent.click(screen.getByTestId('deleteRecipe'));

		// Check if the recipe is still present
		const recipe = screen.queryByText('Recipe 1');
		if (recipe) {
			throw new Error('Recipe was not deleted');
		}
	});
});
