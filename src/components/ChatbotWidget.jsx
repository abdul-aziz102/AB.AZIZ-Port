import React, { useState } from "react";
import { MessageCircle, X, Bot, Zap } from "lucide-react";
import Chat from "./Chat";
import { motion, AnimatePresence } from "framer-motion";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setIsPulsing(false);
  };

  return (
    <>
      {/* Enhanced Floating Chat Button */}
      <motion.div
        onClick={handleToggle}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white rounded-2xl shadow-2xl cursor-pointer hover:shadow-3xl z-[9999] flex items-center justify-center group"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: isPulsing 
            ? [
                "0 0 0 0 rgba(59, 130, 246, 0.7)",
                "0 0 0 12px rgba(59, 130, 246, 0)",
              ]
            : "0 20px 40px rgba(0,0,0,0.3)",
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: isPulsing ? Infinity : 0,
            repeatType: "loop",
          },
        }}
      >
        <div className="relative">
          <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-16 bottom-1/2 translate-y-1/2 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Chat with AI Assistant
          <div className="absolute top-1/2 right-0 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
        </div>
      </motion.div>

      {/* Enhanced Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.9 }}
            transition={{ 
              type: "spring",
              damping: 25,
              stiffness: 300
            }}
            className="fixed bottom-24 right-6 w-[95vw] max-w-[420px] h-[70vh] min-h-[500px] max-h-[700px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-[9999] border border-gray-200 dark:border-gray-800 backdrop-blur-lg bg-opacity-95 dark:bg-opacity-95"
          >
            {/* Enhanced Header */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white p-4 relative overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-2 right-4 w-8 h-8 bg-white rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-white rounded-full"></div>
              </div>
              
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                      <Bot size={20} className="text-white" />
                    </div>
                    <motion.div
                      className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-indigo-700"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-lg">AZ.Tech AI</h2>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <p className="text-xs text-blue-100">Online • Ready to help</p>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg flex items-center justify-center transition-all duration-200 group"
                >
                  <X size={16} className="group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>

            {/* Chat Content */}
            <div className="flex-1 overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
              <Chat />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotWidget;