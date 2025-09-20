import { useEffect } from "react";

const VoiceflowChat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    script.type = "text/javascript";
    script.onload = () => {
      if (window.voiceflow) {
        window.voiceflow.chat.load({
          verify: { projectID: "68ce257f47dc4d584e7ef494" }, // ✅ apna projectID
          url: "https://general-runtime.voiceflow.com",
          versionID: "production",
          voice: {
            url: "https://runtime-api.voiceflow.com",
          },
        });
      }
    };
    document.body.appendChild(script);

    // cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // ye component sirf chat widget inject karega, koi UI nahi dikhayega
};

export default VoiceflowChat;
