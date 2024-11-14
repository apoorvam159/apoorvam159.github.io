// Select elements from the DOM
const button = document.getElementById('fetchJoke');
const jokeParagraph = document.getElementById('joke');

// API endpoint variable
const apiEndpoint = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';

// Function to fetch a random joke
async function getJoke() {
    try {
        const response = await fetch(apiEndpoint);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data.joke); // Log the joke to the console
        displayJoke(data.joke); // Display the joke in the paragraph
    } catch (error) {
        console.error('Fetch error:', error);
        alert('Failed to fetch the joke.');
    }
}

// Function to display the joke
function displayJoke(joke) {
    jokeParagraph.textContent = joke;
}

// Event listener for button click
button.addEventListener('click', getJoke);

// Fetch a joke when the page loads
window.addEventListener('load', getJoke);
