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



let quotes = [];


function loadQuotes() {
  const storedQuotes = localStorage.getItem("quotes");
  if (storedQuotes) {
    quotes = JSON.parse(storedQuotes);
  }
}


function saveQuotes() {
  localStorage.setItem("quotes", JSON.stringify(quotes));
}

function addQuote(newQuote) {
  quotes.push(newQuote);
  saveQuotes();
}


function exportToJsonFile() {
  const jsonQuotes = JSON.stringify(quotes);
  const blob = new Blob([jsonQuotes], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "quotes.json";
  a.click();
}


function importFromJsonFile(event) {
  const fileReader = new FileReader();
  fileReader.onload = function(event) {
    const importedQuotes = JSON.parse(event.target.result);
    quotes.push(...importedQuotes);
    saveQuotes();
    alert("Quotes imported successfully!");
  };
  fileReader.readAsText(event.target.files[0]);

loadQuotes();

document.getElementById("addQuoteButton").addEventListener("click", function() {
  const newQuoteText = document.getElementById("newQuoteText").value;
  const newQuoteCategory = document.getElementById("newQuoteCategory").value;
  const newQuote = { text: newQuoteText, category: newQuoteCategory };
  addQuote(newQuote);
});

document.getElementById("exportToJsonFileButton").addEventListener("click", exportToJsonFile);

document.getElementById("importFile").addEventListener("change", importFromJsonFile);




let quotes = [];

let categories = [];

function loadQuotes() {
  const storedQuotes = localStorage.getItem("quotes");
  if (storedQuotes) {
    quotes = JSON.parse(storedQuotes);
  }
}

function saveQuotes() {
  localStorage.setItem("quotes", JSON.stringify(quotes));
}

function addQuote(newQuote) {
  quotes.push(newQuote);
  saveQuotes();
  updateCategories(newQuote.category);
}

function updateCategories(category) {
  if (!categories.includes(category)) {
    categories.push(category);
    const categoryFilter = document.getElementById("categoryFilter");
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  }
}


function populateCategories() {
  const categoryFilter = document.getElementById("categoryFilter");
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
}

function filterQuotes() {
  const categoryFilter = document.getElementById("categoryFilter");
  const selectedCategory = categoryFilter.value;
  const quoteDisplay = document.getElementById("quoteDisplay");
  if (selectedCategory === "all") {
    quoteDisplay.innerHTML = "";
    quotes.forEach((quote) => {
      const p = document.createElement("p");
      p.textContent = quote.text;
      quoteDisplay.appendChild(p);
    });
  } else {
    quoteDisplay.innerHTML = "";
    quotes
      .filter((quote) => quote.category === selectedCategory)
      .map((quote) => {
        const p = document.createElement("p");
        p.textContent = quote.text;
        quoteDisplay.appendChild(p);
      });
  }
}


loadQuotes();
populateCategories();


document.getElementById("addQuoteButton").addEventListener("click", function() {
  const newQuoteText = document.getElementById("newQuoteText").value;
  const newQuoteCategory = document.getElementById("newQuoteCategory").value;
  const newQuote = { text: newQuoteText, category: newQuoteCategory };
  addQuote(newQuote);
});


document.getElementById("exportToJsonFileButton").addEventListener("click", function() {
  const jsonQuotes = JSON.stringify(quotes);
  const blob = new Blob([jsonQuotes], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "quotes.json";
  a.click();
});


document.getElementById("importFile").addEventListener("change", function(event) {
  const fileReader = new FileReader();
  fileReader.onload = function(event) {
    const importedQuotes = JSON.parse(event.target.result);
    quotes.push(...importedQuotes);
    saveQuotes();
    populateCategories();
    alert("Quotes imported successfully!");
  };
  fileReader.readAsText(event.target.files[0]);
});




  
let quotes = [];

// Array of unique categories
let categories = [];

// Simulated server URL
const serverUrl = "https://jsonplaceholder.typicode.com/posts";

// Load quotes from local storage
function loadQuotes() {
  const storedQuotes = localStorage.getItem("quotes");
  if (storedQuotes) {
    quotes = JSON.parse(storedQuotes);
  }
}

// Save quotes to local storage
function saveQuotes() {
  localStorage.setItem("quotes", JSON.stringify(quotes));
}

// Add quote to quotes array and save to local storage
function addQuote(newQuote) {
  quotes.push(newQuote);
  saveQuotes();
  updateCategories(newQuote.category);
}

// Update categories array and dropdown menu
function updateCategories(category) {
  if (!categories.includes(category)) {
    categories.push(category);
    const categoryFilter = document.getElementById("categoryFilter");
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  }
}

// Populate categories dropdown menu
function populateCategories() {
  const categoryFilter = document.getElementById("categoryFilter");
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
}

// Filter quotes based on selected category
function filterQuotes() {
  const categoryFilter = document.getElementById("categoryFilter");
  const selectedCategory = categoryFilter.value;
  const quoteDisplay = document.getElementById("quoteDisplay");
  if (selectedCategory === "all") {
    quoteDisplay.innerHTML = "";
    quotes.forEach((quote) => {
      const p = document.createElement("p");
      p.textContent = quote.text;
      quoteDisplay.appendChild(p);
    });
  } else {
    quoteDisplay.innerHTML = "";
    quotes
      .filter((quote) => quote.category === selectedCategory)
      .map((quote) => {
        const p = document.createElement("p");
        p.textContent = quote.text;
        quoteDisplay.appendChild(p);
      });
  }
}

// Fetch quotes from server
async function fetchQuotesFromServer() {
  try {
    const response = await fetch(serverUrl);
    const data = await response.json();
    // Update local quotes array with server data
    quotes = data.map((quote) => ({
      text: quote.title,
      category: quote.userId.toString(),
    }));
    saveQuotes();
    populateCategories();
    alert("Quotes synced with server!");
  } catch (error) {
    console.error("Error fetching quotes from server:", error);
  }
}

// Sync quotes with server
async function syncQuotes() {
  try {
    await fetchQuotesFromServer();
    console.log("Quotes synced with server!");
  } catch (error) {
    console.error("Error syncing quotes:", error);
  }
}

// Simulate server interaction by posting data periodically
async function postServerData() {
  try {
    const newQuote = {
      title: "New quote from client",
      userId: 1,
    };
    const response = await fetch(serverUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newQuote),
    });
    const data = await response.json();
    console.log("Server response:", data);
  } catch (error) {
    console.error("Error posting server data:", error);
  }
}

// Periodically fetch and post data to simulate server interaction
setInterval(async () => {
  await syncQuotes();
  await postServerData();
}, 10000); // 10 seconds

// Load quotes and categories from local storage when initialized
loadQuotes();
populateCategories();

// Event listener for the "Add Quote" button
document.getElementById("addQuoteButton").addEventListener("click", function() {
  const newQuoteText = document.getElementById("newQuoteText").value;
  const newQuoteCategory = document.getElementById("newQuoteCategory").value;
  const newQuote = { text: newQuoteText, category: newQuoteCategory };
  addQuote(newQuote);
});

// Event listener for the "Export Quotes" button
document.getElementById("exportToJsonFileButton").addEventListener("click", function() {
  const jsonQuotes = JSON.stringify(quotes);
  const blob = new Blob([jsonQuotes], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "quotes.json";
  a.click();
});

// Event listener for the "Import from JSON" file input
document.getElementById("importFile").addEventListener("change", function(event) {
  const fileReader = new FileReader();
  fileReader.onload = function(event) {
    const importedQuotes = JSON.parse(event.target.result);
    quotes.push(...importedQuotes);
    saveQuotes();
    populateCategories();
    alert("Quotes imported successfully!");
  };
  fileReader


