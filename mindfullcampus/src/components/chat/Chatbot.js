import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    const messageText = e.target.elements.message.value.trim();
    if (messageText !== '') {
      // Add user message to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: messageText, isUserMessage: true },
      ]);

      // Simulate a response from the chatbot
      setTimeout(() => {
        const botResponse = 'This is a sample response from the chatbot.';
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botResponse, isUserMessage: false },
        ]);
      }, 500);

      // Clear the input field
      e.target.elements.message.value = '';
    }
  };

  return (
    <div className="chatbot-container">
      <h1 className="chatbot-title">Personal Bot</h1>
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chatbot-message ${
              message.isUserMessage ? 'chatbot-user' : 'chatbot-bot'
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleMessageSubmit}>
        <input
          type="text"
          name="message"
          placeholder="Type your message..."
          className="chatbot-input"
        />
        <button type="submit" className="chatbot-send-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
