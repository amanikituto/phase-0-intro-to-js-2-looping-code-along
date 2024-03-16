// index.js

// Function to generate thank you messages for each name provided
function writeCards(names, event) {
    let thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouMessages;
  }
  
  // Function to count down from a given number to zero
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  