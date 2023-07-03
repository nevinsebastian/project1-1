import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    const messageText = e.target.elements.message.value.trim().toLowerCase();

    if (messageText !== '') {
      // Add user message to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: messageText, isUserMessage: true },
      ]);

      // Check for specific keywords in the user's message
      if (messageText.includes('hi') || messageText.includes('hey') || messageText.includes('hello')) {
        const botResponse = 'Hi, how can I help you?';
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botResponse, isUserMessage: false },
        ]);
      } else if (messageText.includes('sad')) {
        const botResponse = `I'm sorry to hear that you're feeling sad. Remember that it's okay to feel this way sometimes. Is there anything specific that's been bothering you? "Feeling sad is tough, but you're not alone. Reach out to friends, family, or a counselor for support. They can provide valuable help during difficult times.` ;
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botResponse, isUserMessage: false },
        ]);
      } else if (messageText.includes('anxiety') || messageText.includes('anxious')) {
        const botResponse = `It sounds like you're feeling anxious. Remember to take deep breaths and try to focus on the present moment. Is there anything specific that's causing your anxiety? Anxiety can be challenging, but there are techniques that can help. Consider trying mindfulness exercises or talking to a professional for guidance.`;
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botResponse, isUserMessage: false },
        ]);
      } else if (messageText.includes('stress')) {
        const botResponse = `I understand that stress can be overwhelming. Remember to take breaks and engage in activities you enjoy to help manage stress levels. Is there anything specific that's causing your stress?  Stress is common, but it's important to find healthy ways to cope. Consider practicing relaxation techniques, such as meditation or exercise.`;
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botResponse, isUserMessage: false },
        ]);
      } else {
        // Default response if no keyword is found
        const botResponse = 'Sorry, I did not understand your message.';
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botResponse, isUserMessage: false },
        ]);
      }

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
