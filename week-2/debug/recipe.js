// // Predict and explain first...

// // This program should log out the title, how many it serves and the ingredients.
// // Each ingredient should be logged on a new line
// // How can you fix it?

// const recipe = {
//   title: "bruschetta",
//   serves: 2,
//   ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
// };

// console.log(`${recipe.title} serves ${recipe.serves}
//   ingredients:
// ${recipe}`);

//In the provided code, there are a couple of issues. Let's break down the problems:

// The template literal attempts to interpolate the entire recipe object, 
// but it should specifically interpolate the ingredients array for a meaningful representation.
// The indentation in the template literal may lead to unexpected spaces in the output.
// To fix these issues, you need to iterate over the ingredients array and log each ingredient on 
// a new line. 

//Here's the corrected code:
const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
${recipe.ingredients.join('\n')}`);

//recipe.ingredients.join('\n'): This joins the ingredients array into a single string with each ingredient on a new line ('\n').
//The corrected template literal now properly logs the title, serves, and ingredients with each ingredient on a new line.
