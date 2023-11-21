// Predict and explain first...
// The program will log out ingredient as object. This is because the value of the ingredient was not called.

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?
// I fixed it by calling the ingredient and I call each by index to log out on each line. I know this is not the best practice but the quickest to save me time for now

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
        ${recipe.ingredients[0]}
        ${recipe.ingredients[1]}
        ${recipe.ingredients[2]}
        ${recipe.ingredients[3]}`);

// console.log(`${recipe.title} serves ${recipe.serves}
//   ingredients:
// ${recipe}`);
