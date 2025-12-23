import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Bot, User, Loader2, Sparkles } from "lucide-react";

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
- Reply professionally, friendly, and clearly.
- Explain things simply if needed.
- At the end, politely ask client for contact info.
- IMPORTANT: Always respond in clean, plain paragraphs. Do not use **bold**, *italics*, numbered lists (1. 2. 3.), bullet points, or markdown formatting. Just use regular text in paragraph form.
`;

const Chat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "👋 Hello! I'm AZ.Tech AI Assistant. I represent Abdul Aziz — Full Stack MERN Developer. How can I help you?",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      // ✅ Fixed Gemini API call with proper format
      const res = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent",
        {
          contents: [
            {
              parts: [{ text: portfolioContext }]
            },
            {
              parts: [{ text: "I understand. I am AZ.Tech AI Assistant. How can I help you?" }]
            },
            // Add conversation history
            ...messages.slice(1).map(m => ({
              parts: [{ text: m.content }]
            })),
            // Add current message
            {
              parts: [{ text: input }]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1024,
          },
          safetySettings: [
            {
              category: "HARM_CATEGORY_HARASSMENT",
              threshold: "BLOCK_NONE"
            }
          ]
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": "AIzaSyBFxVRCvOH6b0YNg3-C0oql6z_TgRvl_H4"
          },
        }
      );

      // ✅ Get the response from Gemini
      const reply = res.data?.candidates?.[0]?.content?.parts?.[0]?.text || 
                    "⚠️ Sorry, I could not understand that.";

      // ✅ Clean the response
      const cleanReply = reply
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .replace(/\*(.*?)\*/g, "$1")
        .replace(/#+\s?/g, "")
        .replace(/\d+\.\s+/g, "")
        .replace(/\n\s*[-•*]\s+/g, "\n")
        .replace(/\n{3,}/g, "\n\n")
        .trim();

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: cleanReply },
      ]);
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message);
      
      let errorMessage = "⚠️ Sorry, something went wrong. Please try again later.";
      
      if (error.response?.status === 403) {
        errorMessage = "❌ API key error. Your Gemini API key is invalid or disabled.";
      } else if (error.response?.status === 429) {
        errorMessage = "❌ Too many requests. Please wait a moment.";
      }
      
      setError(errorMessage);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: errorMessage,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 border-b">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
          <Bot className="text-white" size={18} />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            AZ.Tech AI Assistant
          </h3>
          <p className="text-xs text-gray-500">Online • Ready to help</p>
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className="px-4 py-2 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300 text-sm border-b">
          {error}
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex gap-3 ${
              m.role === "user" ? "flex-row-reverse" : ""
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                m.role === "user"
                  ? "bg-blue-500"
                  : "bg-purple-600"
              }`}
            >
              {m.role === "user" ? (
                <User size={14} className="text-white" />
              ) : (
                <Bot size={14} className="text-white" />
              )}
            </div>

            <div
              className={`max-w-[75%] px-4 py-3 rounded-xl text-sm ${
                m.role === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white border"
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <Bot size={14} className="text-white" />
            </div>
            <div className="px-4 py-3 bg-white dark:bg-gray-800 rounded-xl border">
              <Loader2 size={16} className="animate-spin" />
            </div>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t bg-white dark:bg-gray-800">
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask something..."
            className="flex-1 px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-700"
          />
          <button
            onClick={sendMessage}
            disabled={loading}
            className="px-4 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white disabled:opacity-50"
          >
            <Sparkles size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;