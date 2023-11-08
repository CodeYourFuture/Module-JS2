// Predict and explain first...
// The recipe does not contain a dot notation / square brackets, to let JS know what value to display
// specified by the key. This will lead to no ingredients being displayed. To line break each Array I will
// first join them, and then specify what I would like them to be separated by.
// NOTE: I changed how it appears in the log (More gaps, capital letters). Sorry for this, but I have
// severe OCD when it comes to things like this! 😂4e

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "Bruschetta",
  serves: 2,
  ingredients: ["Olive oil", "Tomatoes", "Salt", "Pepper"],
};

console.log(`${recipe.title}

Serves: ${recipe.serves}

Ingredients:
${recipe.ingredients.join("\n")}`);
