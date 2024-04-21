document.addEventListener('DOMContentLoaded', () => {
  const greetings = [
    'Hello!',
    'Hi there!',
    'Welcome abroad!',
    'Hey!',
    'Greetings!',
  ];
  // Randomly select a greeting from the array and set it as the text content of the element
  document.getElementById('greeting').textContent = greetings[Math.floor(Math.random() * greetings.length)];
});
