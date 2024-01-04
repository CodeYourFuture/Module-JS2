// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

// console.log(`${recipe.title} serves ${recipe.serves}
//   ingredients:
// ${recipe}`);

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:`);

for (const ingredient of recipe.ingredients) {
  console.log(ingredient);
}

// Before fixing the bug, the code would produce an error due to the incorrect usage of the ${recipe} interpolation in the console.log statement.
// The code attempts to interpolate the entire recipe object, which is not appropriate for formatting and logging the ingredients.
