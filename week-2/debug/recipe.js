// Predict and explain first...
//Ans; As we did not use any code to iterate the values of the ${recipe} object, it would not give us any output.
// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?
// Ans: we can fixed it by using dote notation 'recipe.ingredients'. and for ingredient to logged each item on a new line , we have to use for-of loop to iterate each items of ingredient in a new line.

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};
console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:`);

  for (const ingredient of recipe.ingredients) {
    console.log(` * ${ingredient}`);
}
