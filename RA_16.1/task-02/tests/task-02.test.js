import React, { useContext } from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { RecipeContext, RecipeProvider } from '../src/RecipeContext';

const TestComponent = () => {
	const { recipes, addRecipe, updateRecipe } = useContext(RecipeContext);

	return (
		<div>
			<button
				data-testid="addRecipe"
				onClick={() =>
					addRecipe({
						id: 1,
						name: 'Test Recipe',
						ingredients: 'Test Ingredients',
						instructions: 'Test Instructions',
					})
				}
			>
				Add Recipe
			</button>
			<button
				data-testid="updateRecipe"
				onClick={() =>
					updateRecipe({
						id: 1,
						name: 'Updated Recipe Name',
						ingredients: 'Updated Ingredients',
						instructions: 'Updated Instructions',
					})
				}
			>
				Update Recipe
			</button>
			{recipes.map((recipe, index) => (
				<div key={index} data-testid="recipe">
					{recipe ? (
						<>
							<div>{recipe.name}</div>
							<div>{recipe.ingredients}</div>
							<div>{recipe.instructions}</div>
						</>
					) : (
						<div>Missing recipe data</div>
					)}
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

		fireEvent.click(screen.getByTestId('addRecipe'));
		fireEvent.click(screen.getByTestId('updateRecipe'));
	});

	it('should display the updated recipe name', async () => {
		const updatedName = await screen.findByText('Updated Recipe Name');
		if (!updatedName) {
			throw new Error('Updated recipe name is not displayed');
		}
	});

	it('should display the updated ingredients', async () => {
		const updatedIngredients = await screen.findByText('Updated Ingredients');
		if (!updatedIngredients) {
			throw new Error('Updated ingredients are not displayed');
		}
	});

	it('should display the updated instructions', async () => {
		const updatedInstructions = await screen.findByText('Updated Instructions');
		if (!updatedInstructions) {
			throw new Error('Updated instructions are not displayed');
		}
	});
});
