import React, { useEffect } from "react";

const AIVoice = () => {
  useEffect(() => {
    // Script load
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <vapi-widget
      public-key="c2eb6a1f-8ca1-4d20-b8d1-f15e9afc26de"
      assistant-id="bebec9d7-ebe9-4960-b593-15a0ac58e1e6"
      mode="voice"
      theme="dark"
      base-bg-color="#000000"
      accent-color="#14B8A6"
      cta-button-color="#000000"
      cta-button-text-color="#ffffff"
      border-radius="large"
      size="full"
      position="bottom-right"
      style={{ marginBottom: "80px" }} // 👈 Navbar/Chat se overlap avoid karega
      title="TALK WITH AI"
      start-button-text="Start"
      end-button-text="End Call"
      chat-first-message="Hey, How can I help you today?"
      chat-placeholder="Type your message..."
      voice-show-transcript="true"
      consent-required="true"
      consent-title="Terms and conditions"
      consent-content={`By clicking "Agree," and each time I interact with this AI agent, I consent to the recording, storage, and sharing of my communications with third-party service providers, and as otherwise described in our Terms of Service.`}
      consent-storage-key="vapi_widget_consent"
    ></vapi-widget>
  );
};

export default AIVoice;
