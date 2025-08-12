import React, { useState } from 'react';
import axios from 'axios';
import { FaRobot } from 'react-icons/fa';

const Chat = () => {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([]);

  const portfolioContext = `
My name is Abdul Aziz. I am a front-end React developer. 
I build modern, responsive websites using React, Tailwind, and JavaScript.

My Skills:
- HTML, CSS, JavaScript
- React.js, Tailwind CSS
- Node.js, Express.js, MongoDB
Experience: 2 years

My Projects:
1. Portfolio Website - a personal responsive website built using React and Tailwind.
2. E-Commerce Store - A shopping cart website using React + Firebase with login system.
3. Coffee Brand Website - A multi-page website with modern UI using React Router.
4. English Learning Website - A multi-page website with modern UI using React Router.
5. Learnify Website.

Contact Email: rehman@example.com
hello: Hello! How can I help you today? This is Abdul Aziz, your AI Assistant.
Assalamualaikum: Wa Alaikum Assalam! How can I help you today? This is Abdul Aziz, your AI Assistant.
Email: abdulazizyousufzia@gmail.com
Number: 0345 2489424
`;

  const generateAnswer = async () => {
    if (!question.trim()) return;

    const userMessage = { text: question, sender: 'user' };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setQuestion('');

    try {
      // Create memory string from previous messages
      const chatHistory = updatedMessages
        .map(msg => `${msg.sender === 'user' ? 'User' : 'AI'}: ${msg.text}`)
        .join('\n');

      const response = await axios({
        url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAtl06jWeRssYK2pvnsl8D5lrpPvq8vomg',
        method: 'post',
        data: {
          contents: [
            {
              parts: [
                {
                  // Send both portfolio info + conversation history
                  text: `${portfolioContext}\nConversation so far:\n${chatHistory}\nUser: ${question}`,
                },
              ],
            },
          ],
        },
      });

      const aiText = response.data.candidates[0]?.content?.parts?.[0]?.text || 'No response received.';
      const aiMessage = { text: aiText, sender: 'ai' };
      setMessages(prev => [...prev, aiMessage]);

    } catch (err) {
      setMessages(prev => [
        ...prev,
        { text: '❌ Failed to get answer. Please try again.', sender: 'ai' },
      ]);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-between px-2 py-4 sm:px-4 sm:py-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <h1 className="text-gray-900 dark:text-white font-semibold text-xl sm:text-2xl py-2 flex items-center gap-2">
        <FaRobot className="text-indigo-500" /> Portfolio AI Assistant
      </h1>

      {/* Chat Box */}
      <div className="w-full flex flex-col justify-between rounded-xl border border-gray-300 dark:border-gray-700 shadow-md bg-white dark:bg-gray-800 flex-1 max-h-[65vh] overflow-hidden">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-3 space-y-4 bg-gray-100 dark:bg-gray-800">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`max-w-[85%] rounded-xl px-4 py-2 text-sm sm:text-base break-words ${
                msg.sender === 'user'
                  ? 'bg-blue-200 text-black self-end ml-auto'
                  : 'bg-gray-200 dark:bg-gray-700 text-black dark:text-white self-start mr-auto'
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex items-center gap-2">
          <input
            type="text"
            placeholder="Ask something about my portfolio..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && generateAnswer()}
            className="flex-1 px-4 py-2 rounded-full text-sm sm:text-base border border-gray-400 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-black dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={generateAnswer}
            className="px-4 py-2 bg-black dark:bg-blue-600 text-white text-sm sm:text-base font-semibold rounded-full shadow-md hover:bg-gray-800 dark:hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
