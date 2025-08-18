import { useEffect } from 'react';
import '@n8n/chat/dist/style.css';
import { createChat } from '@n8n/chat';

export const Chat = () => {
  useEffect(() => {
    createChat({
      webhookUrl: 'https://abdulazizyousufzai.app.n8n.cloud/webhook/1bec806c-689b-4522-af08-c9e6da094c79/chat',
      mode: 'window',
      loadPreviousSession: false,
      showWelcomeScreen: false,
      initialMessages: [
        "Hi there! 👋",
        "This is Abdul Aziz. How can I assist you today?"
      ],
      i18n: {
        en: {
          title: "Welcome to My Portfolio 👋",
          subtitle: "Ask us anything, we’re happy to help!"
        }
      }
      
    });
  }, []);
  
  return <div id="n8n-chat"></div>;
};
