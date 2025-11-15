/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FaRobot, FaUser, FaPaperPlane, FaRegClock, FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, User, Sparkles, Loader2 } from "lucide-react";

const Chat = () => {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "👋 Hello! I'm your AI Assistant from AZ.Tech. I can tell you about Abdul Aziz, his work, projects, and AZ.Tech's services. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Context about Abdul Aziz & AZTech
  const portfolioContext = `
You are a professional AI assistant representing "AZ.Tech" and its founder Abdul Aziz.

Abdul Aziz:
- A passionate Full Stack MERN Developer.
- Skilled in React, Node.js, Express, MongoDB, and Tailwind CSS.
- Builds professional web apps: portfolios, dashboards, AI tools, and learning platforms.
- Believes in clean UI, fast performance, and interactive design.

AZ.Tech:
- A digital studio led by Abdul Aziz.
- Specializes in Web Development, UI/UX Design, and AI-Powered Applications.
- Provides end-to-end services from frontend to backend.
- Values innovation, professionalism, and client satisfaction.

Behavior:
- Always reply in a professional, friendly, and helpful tone.
- If the user asks something unknown, explain it step-by-step simply.
- If the question is off-topic, give general helpful info.
Contact: Abdul Aziz can be reached at
- Email: abdulazizyousufzia@gmail.com
- phone: +92 3452489424

Projects:
- https://ecommerce-pro-iota.vercel.app/
- https://pak-ai-code.vercel.app/
- https://zippy-zabaione-6406a6.netlify.app/
- https://clothes-shop-zeta.vercel.app/
- https://company-portfolio-pxdb.vercel.app/
- https://home-academy-pi.vercel.app/
At the and:
Ask to client give me your contact info to work together
.
`;

  // Function to detect and convert URLs to clickable links
  const formatMessageWithLinks = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    
    return text.split(urlRegex).map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline transition-colors duration-200 mx-1"
            onClick={(e) => e.stopPropagation()}
          >
            {part.length > 40 ? part.substring(0, 40) + '...' : part}
            <FaExternalLinkAlt size={10} className="flex-shrink-0" />
          </a>
        );
      }
      return part;
    });
  };

  const cleanAndFormatText = (text) =>
    text
      .replace(/#+\s?/g, "")
      .replace(/\*\*(.*?)\*\*/g, "$1")
      .replace(/\*/g, "•")
      .trim();

  const generateAnswer = async () => {
    if (!question.trim()) return;

    const userMessage = { 
      text: question, 
      sender: "user", 
      timestamp: new Date() 
    };
    setMessages((prev) => [...prev, userMessage]);
    setQuestion("");
    setIsTyping(true);

    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBFxVRCvOH6b0YNg3-C0oql6z_TgRvl_H4",
        method: "post",
        data: {
          contents: [
            {
              parts: [{ text: `${portfolioContext}\nUser: ${question}` }],
            },
          ],
        },
      });

      const rawText = response.data.candidates[0].content.parts[0].text;
      const formattedText = cleanAndFormatText(rawText);

      // Simulate typing delay for better UX
      setTimeout(() => {
        const aiMessage = { 
          text: formattedText, 
          sender: "ai", 
          timestamp: new Date() 
        };
        setMessages((prev) => [...prev, aiMessage]);
        setIsTyping(false);
      }, 1000);

    } catch (err) {
      setTimeout(() => {
        const fallback = {
          text: "⚙️ Sorry, I couldn't process your request at the moment. Please try again or check your connection.",
          sender: "ai",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, fallback]);
        setIsTyping(false);
      }, 1000);
    }
    console.log("Error occurred:", err);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Function to handle project-related questions directly
  const handleQuickProjectAction = () => {
    const projectMessage = {
      sender: "ai",
      text: "Here are Abdul Aziz's recent projects. Click any link to visit the live website:\n\n• E-commerce Store: https://ecommerce-pro-iota.vercel.app/\n• AI Code Assistant: https://pak-ai-code.vercel.app/\n• Portfolio Website: https://zippy-zabaione-6406a6.netlify.app/\n• Clothing Shop: https://clothes-shop-zeta.vercel.app/\n• Company Portfolio: https://company-portfolio-pxdb.vercel.app/\n• Learning Academy: https://home-academy-pi.vercel.app/\n\nFeel free to explore these projects and let me know if you'd like details about any specific one!",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, projectMessage]);
  };

  return (
    <div className="w-full h-full flex flex-col bg-gray-50 dark:bg-gray-900">
      {/* Enhanced Header */}
      <div className="flex items-center gap-3 p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="relative">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
            <Bot size={20} className="text-white" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white dark:border-gray-800"></div>
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 dark:text-white">AZ.Tech Assistant</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">AI-powered support</p>
        </div>
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span className="text-xs text-gray-500">Online</span>
        </div>
      </div>

      {/* Enhanced Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 scroll-smooth">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex gap-3 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
          >
            {/* Avatar */}
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
              msg.sender === "user" 
                ? "bg-blue-500" 
                : "bg-gradient-to-br from-purple-500 to-blue-600"
            }`}>
              {msg.sender === "user" ? (
                <User size={14} className="text-white" />
              ) : (
                <Bot size={14} className="text-white" />
              )}
            </div>

            {/* Message Bubble */}
            <div className={`max-w-[80%] ${msg.sender === "user" ? "items-end" : "items-start"} flex flex-col gap-1`}>
              <div className={`px-4 py-3 rounded-2xl ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white rounded-br-md"
                  : "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-md border border-gray-200 dark:border-gray-700"
              } shadow-sm`}>
                <p className="text-sm leading-relaxed whitespace-pre-wrap">
                  {msg.sender === "ai" ? formatMessageWithLinks(msg.text) : msg.text}
                </p>
              </div>
              
              {/* Timestamp */}
              <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                <FaRegClock size={10} />
                <span>{formatTime(msg.timestamp)}</span>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Typing Indicator */}
        <AnimatePresence>
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="flex gap-3"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                <Bot size={14} className="text-white" />
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl rounded-bl-md px-4 py-3 border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex gap-1">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                    className="w-2 h-2 bg-gray-400 rounded-full"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                    className="w-2 h-2 bg-gray-400 rounded-full"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                    className="w-2 h-2 bg-gray-400 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div ref={chatEndRef} />
      </div>

      {/* Enhanced Input Area */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="flex items-center gap-2">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Ask about Abdul Aziz or AZ.Tech services..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && generateAnswer()}
              className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              disabled={isTyping}
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Sparkles size={16} className="text-gray-400" />
            </div>
          </div>
          
          <motion.button
            onClick={generateAnswer}
            disabled={!question.trim() || isTyping}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center min-w-[48px]"
          >
            {isTyping ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <FaPaperPlane size={16} />
            )}
          </motion.button>
        </div>
        
        {/* Quick Suggestions */}
        <div className="flex flex-wrap gap-2 mt-3">
          {[
            "Tell me about Abdul Aziz", 
            "What services does AZ.Tech offer?", 
            "Show me projects",
            "View portfolio websites"
          ].map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => {
                if (suggestion === "Show me projects" || suggestion === "View portfolio websites") {
                  handleQuickProjectAction();
                } else {
                  setQuestion(suggestion);
                  setTimeout(() => generateAnswer(), 100);
                }
              }}
              className="px-3 py-1.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 border border-gray-200 dark:border-gray-600"
              disabled={isTyping}
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chat;