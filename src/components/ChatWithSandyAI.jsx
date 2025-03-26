import "./chatWithSandyAI.css";
import React, { useEffect } from "react";

const ChatWithSandyAI = () => {
  useEffect(() => {
    // Add a class to the body when the component mounts
    document.body.classList.add("chat-with-sandy-ai");

    // Remove the class when the component unmounts
    return () => {
      document.body.classList.remove("chat-with-sandy-ai");
    };
  }, []);

  return (
    <div className="chat-with-sandy-ai">
      <div
        className="container-fluid mt-5 pt-4"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/VPy_-vh8xO5bwJhpaqKyM"
          style={{
            width: "100%",
            height: "100%",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default ChatWithSandyAI;
