import React from "react";

function RecipeList({ recipes, deleteRecipe }) {
  return (
    <div>
      <h2>🍲 All Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes added yet.</p>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {recipes.map((recipe, index) => (
            <li key={index} style={{ marginBottom: "10px", padding: "10px",
              border: "1px solid #ccc", borderRadius: "5px" }}>
              <strong>{recipe.name}</strong>: {recipe.description}
              <button onClick={() => deleteRecipe(index)} style={{
                marginLeft: "10px", backgroundColor: "red", color: "white",
                border: "none", padding: "5px 10px", borderRadius: "3px",
                cursor: "pointer" }}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RecipeList;