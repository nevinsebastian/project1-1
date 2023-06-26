import React, { useState } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const API_KEY = "YOUR_API_KEY";

const systemMessage = {
  role: "system",
  content: "Explain things like you're talking to a software professional with 2 years of experience."
};

function Chat() {
  const [messages, setMessages] = useState([
    {
      content: "Hello, I'm your mental health expert",
      sentTime: "just now",
      role: "ChatGPT"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      content: message,
      role: 'user'
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = messageObject.role === 'ChatGPT' ? 'assistant' : 'user';
      return { role: role, content: messageObject.content };
    });

    const apiRequestBody = {
      model: 'gpt-3.5-turbo',
      messages: [
        systemMessage,
        ...apiMessages
      ]
    };

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + API_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(apiRequestBody)
      });

      const data = await response.json();
      console.log(data);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          content: data.choices[0].message.content,
          role: 'ChatGPT'
        }
      ]);
      setIsTyping(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="chat">
      <div style={{ position: "relative", height: "800px", width: "700px" }}>
        <MainContainer>
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={
                isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null
              }
            >
              {messages.map((message, index) => (
                <Message key={index} model={message} />
              ))}
            </MessageList>
            <MessageInput
              placeholder="Type message here"
              onSend={handleSend}
            />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default Chat;
