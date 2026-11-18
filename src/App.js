import React, { useState } from "react";
import RecipeForm from "./RecipeForm";
import RecipeList from "./RecipeList";

function App() {
  const [recipes, setRecipes] = useState([]);
  const addRecipe = (recipe) => setRecipes([...recipes, recipe]);
  const deleteRecipe = (index) => setRecipes(recipes.filter((_, i) => i !== index));

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>📖 Recipe Book</h1>
      <RecipeForm addRecipe={addRecipe} />
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
    </div>
  );
}

export default App;