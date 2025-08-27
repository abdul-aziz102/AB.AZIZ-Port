import { useEffect } from 'react';
import '@n8n/chat/dist/style.css'; 
import './custom-chat.css';
import { createChat } from '@n8n/chat';

export const Chat = () => {
  useEffect(() => {
    createChat({
      webhookUrl: 'http://localhost:5678/webhook/920ae1e2-2b38-4188-8f29-5e3cfbde64cb/chat',
      mode: 'window',
      loadPreviousSession: false,
      showWelcomeScreen: false,

      // ✅ Force frontend greeting
      initialMessages: [
        "Hi there! 👋",
        "This is Abdul Aziz. How can I assist you today?"
      ],

      // ✅ Optional: header ka text bhi change karlo
      i18n: {
        en: {
          title: "Welcome My Portfolio 👋",
          subtitle: "Ask us anything, we’re happy to help!"
        }
      }
    });
  }, []);

  return <div id="n8n-chat"></div>;
};
