// Select the button and greeting paragraph
const greetButton = document.getElementById('greetButton');
const greeting = document.getElementById('greeting');

// Add an event listener to the button
greetButton.addEventListener('click', function() {
    greeting.textContent = "Hello, welcome to my interactive website!";
});