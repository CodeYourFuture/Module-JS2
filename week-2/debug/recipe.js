// Predict and explain first...
//It should show the tittle of the const recipe = bruschetta serves 2 and the ingredients with all the
// ingredients, but it won't because it miss the reference for the key (ingredients)
// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
${recipe.ingredients}`);
