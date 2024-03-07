import React from 'react';

const RecipeCard = ({ recipe }) => {
	return (
		<div className="recipe">
			<h3>{recipe.name}</h3>
			<p>
				<strong>Ingredients:</strong> {recipe.ingredients}
			</p>
			<p>
				<strong>Instructions:</strong> {recipe.instructions}
			</p>
		</div>
	);
};

export default RecipeCard;
