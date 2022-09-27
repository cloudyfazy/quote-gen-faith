const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');


//let apiQuotes = [];

// Loading Spinner Shown
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Remove Loading Spinner
function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}
//show new quotes
function newQuote() {
  
  // Pick a random quote from array
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  console.log(quote);
}
  // Check if Author field is blank and replace it with 'Unknown'
  //if (!quote.author) {
   // authorText.textContent = 'Unknown';
  //} else {
 //   authorText.textContent = quote.author;
 // }




//Get quotes from API
//async function getQuotes(){
//    const apiUrl = 'https://type.fit/api/quotes';
//    try {
//      const response = await fetch (apiUrl);
  //    apiQuotes = await response.json();
    //  console.log(apiQuotes);
      //newQuote();
    //} catch (error) {
        //catch error here
    //}
//} 

// On Load
//getQuotes();

newQuote();