import quotes from "./quotes.js";
const newQuote = document.querySelector("#new-quote");
const quote = document.querySelector("#quote");
const author = document.querySelector("#author")

newQuote.addEventListener('click',getQuote);
document.addEventListener("DOMContentLoaded",getQuote);

function getQuote(){
  const pickingQuote = pickFromArray(quotes)
  quote.textContent = pickingQuote.quote;
  author.textContent = pickingQuote.author;
}

// You don't need to change this function
function pickFromArray(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}