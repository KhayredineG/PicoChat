// Load chat history from localStorage when page loads
document.addEventListener('DOMContentLoaded', () => {
  const history = JSON.parse(localStorage.getItem('chatHistory') || '[]');
  history.forEach((msg) => displayMessage(msg.text, msg.sender));
});

// Log the API key to verify it's loaded
console.log('API Key:', import.meta.env.VITE_GROQ_API_KEY);

export function sendMessage() {
  const input = document.getElementById('user-input');
  const message = input.value.trim();

  if (message) {
    // Save and display user message
    saveMessage(message, 'user');
    displayMessage(message, 'user');

    // Simulate AI response
    fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'mixtral-8x7b-32768',
        messages: [
          {
            role: 'user',
            content: message,
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const aiResponse = data.choices[0].message.content;
        saveMessage(aiResponse, 'ai');
        displayMessage(aiResponse, 'ai');
      })
      .catch((error) => {
        console.error('Error:', error);
        const errorMessage =
          'Sorry, there was an error processing your request.';
        saveMessage(errorMessage, 'ai');
        displayMessage(errorMessage, 'ai');
      });

    input.value = '';
  }
}

export function displayMessage(message, sender) {
  const chatHistory = document.getElementById('chat-history');
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}-message`;
  messageDiv.textContent = message;
  chatHistory.appendChild(messageDiv);
  chatHistory.scrollTop = chatHistory.scrollHeight;
}

export function saveMessage(message, sender) {
  const history = JSON.parse(localStorage.getItem('chatHistory') || '[]');
  history.push({ text: message, sender: sender });
  localStorage.setItem('chatHistory', JSON.stringify(history));
}

export function clearHistory() {
  localStorage.removeItem('chatHistory');
  document.getElementById('chat-history').innerHTML = '';
}

// Allow sending message with Enter key (Shift+Enter for new line)
document.getElementById('user-input').addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});
