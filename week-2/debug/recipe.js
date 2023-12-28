// Predict and explain first...
//  it should log the title, the number it serves, and the ingredients for a recipe, with each ingredient on a new line.

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(
  `${recipe.title} \nserves ${
    recipe.serves
  }\ningredients:\n${recipe.ingredients.join("\n")}`
);
//\n creates new lines in the output. It places title, serves, and ingredients on separate lines to make the console output more readable.
