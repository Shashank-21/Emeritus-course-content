import React, { useContext } from 'react';
import { render, act } from '@testing-library/react';
import { RecipeContext, RecipeProvider } from '../src/RecipeContext.js';

const TestComponent = () => {
	const { recipes, addRecipe } = useContext(RecipeContext);

	return (
		<div>
			<button
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
			<div>{recipes.length > 0 ? recipes[0].name : 'No recipes'}</div>
		</div>
	);
};

describe('RecipeProvider', () => {
	it('should add a new recipe', () => {
		const { getByText } = render(
			<RecipeProvider>
				<TestComponent />
			</RecipeProvider>
		);

		expect(getByText('No recipes')).toBeInTheDocument();

		act(() => {
			getByText('Add Recipe').click();
		});

		expect(getByText('Test Recipe')).toBeInTheDocument();
	});
});
