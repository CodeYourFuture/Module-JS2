// Predict and explain first...
// The recipe does not contain a dot notation / square brackets, to let JS know what value to display
// specified by the key. This will lead to no ingredients being displayed. To line break each Array I will
// first join them, and then specify what I would like them to be seperated by.

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
${recipe.ingredients.join("\n")}`);
