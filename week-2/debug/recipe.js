// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`
Recipe: ${recipe.title} 
serves: ${recipe.serves}
ingredients: ${recipe.ingredients.join("\n")}.`);

// to have each ingredient on a new line, we can use .join function
// recipe.ingredients.join("\n");
