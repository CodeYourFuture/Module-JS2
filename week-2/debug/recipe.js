// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(
  `${recipe.title} serves ${
    recipe.serves
  }\ningredients:\n${recipe.ingredients.join("\n")}`
); //to log it we need to call ingeridients from recipe object and join \n to it
