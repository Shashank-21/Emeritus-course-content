import React, { useState, useContext } from 'react';
import { RecipeContext } from './RecipeContext';

const RecipeCard = ({ recipe }) => {
	const { updateRecipe } = useContext(RecipeContext);
	const [isEditing, setIsEditing] = useState(false);
	const [updatedName, setUpdatedName] = useState(recipe.name);
	const [updatedIngredients, setUpdatedIngredients] = useState(
		recipe.ingredients
	);
	const [updatedInstructions, setUpdatedInstructions] = useState(
		recipe.instructions
	);

	const handleUpdate = () => {
		const updatedRecipe = {
			id: recipe.id,
			name: updatedName,
			ingredients: updatedIngredients,
			instructions: updatedInstructions,
		};
		updateRecipe(updatedRecipe);
		setIsEditing(false);
	};

	return (
		<div className="recipe">
			{isEditing ? (
				<>
					<input
						type="text"
						value={updatedName}
						onChange={(e) => setUpdatedName(e.target.value)}
					/>
					<textarea
						value={updatedIngredients}
						onChange={(e) => setUpdatedIngredients(e.target.value)}
					/>
					<textarea
						value={updatedInstructions}
						onChange={(e) => setUpdatedInstructions(e.target.value)}
					/>
					<button onClick={handleUpdate}>Update Recipe</button>
					<button onClick={() => setIsEditing(false)}>Cancel</button>
				</>
			) : (
				<>
					<h3>{recipe.name}</h3>
					<p>
						<strong>Ingredients:</strong> {recipe.ingredients}
					</p>
					<p>
						<strong>Instructions:</strong> {recipe.instructions}
					</p>
					<button onClick={() => setIsEditing(true)}>Edit</button>
				</>
			)}
		</div>
	);
};

export default RecipeCard;
