import React, { useState } from "react";

function RecipeForm({ addRecipe }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description) return;
    addRecipe({ name, description });
    setName("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input type="text" placeholder="Recipe Name" value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }} />
      <input type="text" placeholder="Recipe Description" value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }} />
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default RecipeForm;