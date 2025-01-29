let quotes = [
  { text: "Believe you can and you're halfway there.", category: "Inspirational" },
  { text: "The only way to do great work is to love what you do.", category: "Motivational" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", category: "Inspirational" },
];


function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  const quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.innerHTML = `
    <p>${quote.text}</p>
    <p>Category: ${quote.category}</p>
  `;
}

function createAddQuoteForm() {
  const addQuoteForm = document.getElementById("addQuoteForm");
  const form = document.createElement("form");
  const quoteInput = document.createElement("input");
  const categoryInput = document.createElement("input");
  const addButton = document.createElement("button");

  quoteInput.type = "text";
  quoteInput.placeholder = "Enter a new quote";
  quoteInput.id = "newQuoteText";

  categoryInput.type = "text";
  categoryInput.placeholder = "Enter quote category";
  categoryInput.id = "newQuoteCategory";

  addButton.textContent = "Add Quote";
  addButton.onclick = addQuote;

  form.appendChild(quoteInput);
  form.appendChild(categoryInput);
  form.appendChild(addButton);
  addQuoteForm.appendChild(form);
}

function addQuote() {
  const newQuoteText = document.getElementById("newQuoteText").value;
  const newQuoteCategory = document.getElementById("newQuoteCategory").value;
  const newQuote = { text: newQuoteText, category: newQuoteCategory };
  quotes.push(newQuote);
  showRandomQuote();
  document.getElementById("newQuoteText").value = "";
  document.getElementById("newQuoteCategory").value = "";
}

document.getElementById("newQuote").addEventListener("click", showRandomQuote);

document.getElementById("addQuoteButton").addEventListener("click", createAddQuoteForm);
showRandomQuote();
