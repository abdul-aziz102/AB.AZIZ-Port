import { useEffect } from "react";

const VapiWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js";
    script.async = true;
    document.body.appendChild(script);

    const widget = document.createElement("vapi-widget");
    widget.setAttribute("public-key", "c2eb6a1f-8ca1-4d20-b8d1-f15e9afc26de");
    widget.setAttribute("assistant-id", "bebec9d7-ebe9-4960-b593-15a0ac58e1e6");
    widget.setAttribute("mode", "voice");
    widget.setAttribute("theme", "dark");
    widget.setAttribute("position", "bottom-right");
    widget.setAttribute("title", "TALK WITH AI");

    document.body.appendChild(widget);

    return () => {
      widget.remove();
      script.remove();
    };
  }, []);

  return null;
};

export default VapiWidget;
