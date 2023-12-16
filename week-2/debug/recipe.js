// Predict and explain first...
//Ans; As we did not use any code to iterate the values of the ${recipe} object, it would not give us any output.
// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?
// Ans: To access the 'ingredients' property of an object named 'recipe', we can use the dot notation 'recipe.ingredients'. In order to log each item of the 'ingredients' property on a new line, we need to use a for-of loop to iterate through each item of the 'ingredients' array and print it on a new line.
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
