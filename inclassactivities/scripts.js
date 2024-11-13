// Select elements
const jokeButton = document.getElementById('getJokeBtn');
const output = document.getElementById('output');

// API endpoint
const apiUrl = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';

// Function to get a joke from the API
async function getJoke() {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data); // Output joke data to console

    // Pass the joke to display function
    displayRes(data.joke);
  } catch (error) {
    console.error('Fetch failed:', error);
    alert('Failed to fetch joke. Please try again.');
  }
}

// Display function
function displayRes(jokeText) {
  output.textContent = jokeText;
}

// Event listener for button click
jokeButton.addEventListener('click', getJoke);

// Fetch joke on page load
getJoke();
