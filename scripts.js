document.getElementById("quote-button")
  .addEventListener("click", () => {
    generateQuote();
  });

function generateQuote() {
  const randomQuotes = [
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Believe you can and you’re halfway there.",
    "Do what you can, with what you have, where you are.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Opportunities don’t happen. You create them.",
    "Doubt kills more dreams than failure ever will.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Everything you can imagine is real.",
  ];

  let quotes = Math.floor(Math.random() * randomQuotes.length); // Get random index

  document.getElementById("quote").innerHTML = randomQuotes[quotes] + ` <div class="copy-div"><button class="copy-button">Copy</button></div>`; // Show the actual quote


  document.querySelector(".copy-button")
    .addEventListener("click", () => {
      navigator.clipboard.writeText(randomQuotes[quotes])
        .then(() => {
          document.querySelector(".copy-button").innerText = "Copied!";
        });
    });
}