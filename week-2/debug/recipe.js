// Predict and explain first...

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



// it should log out like this `ruschetta serves 2 ingredients:title: "bruschetta",serves: 2,ingredients: ["olive oil", "tomatoes", "salt", "pepper"]`
// as the last template litral `${recipe} log out all the object not ingridients .
// apparently using a template litral directly on the object doesnt work if we dont refer to the corresponding value by its key
// and JS tris to concat the strings together and .toString() for an object make it [object object] for a key/value pair