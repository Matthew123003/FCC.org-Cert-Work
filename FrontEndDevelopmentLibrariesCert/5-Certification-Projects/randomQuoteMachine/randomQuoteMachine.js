const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Get busy living or get busy dying.", author: "Stephen King" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" }
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayQuote() {
    const randomQuote = getRandomQuote();
    document.getElementById('text').textContent = randomQuote.text;
    document.getElementById('author').textContent = randomQuote.author;
    document.getElementById('tweet-quote').href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${randomQuote.text}" - ${randomQuote.author}`)}`;
}

document.getElementById('new-quote').addEventListener('click', displayQuote);

// Display a quote when the page loads
window.onload = displayQuote;
