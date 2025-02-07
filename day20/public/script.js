const socket = io();

// DOM elements
const form = document.getElementById('chat-form');
const input = document.getElementById('message-input');
const messages = document.getElementById('messages');

// Handle form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value) {
    // Emit the message to the server
    socket.emit('chat message', input.value);
    input.value = ''; // Clear the input field
  }
});

// Listen for incoming messages
socket.on('chat message', (data) => {
  const item = document.createElement('li');
  item.textContent = `User ${data.id}: ${data.message}`;

  // Add a class to differentiate user messages
  if (data.id === socket.id) {
    item.classList.add('user-message'); // Style user messages differently
  }

  messages.appendChild(item); // Add new message to the list
  messages.scrollTop = messages.scrollHeight; // Scroll to the bottom
});