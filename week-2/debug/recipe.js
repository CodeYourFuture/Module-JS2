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
// this does not work because ingredients's value is an array and to display an element from an arary you either access them using any of the array methods including loops or using index notations.

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:`);
  for(ingredients of recipe.ingredients){
  console.log(ingredients)
 }