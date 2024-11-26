import React, { useState } from "react";
import ChatBot from "./components/ChatBot";
import Customizer from "./components/Customizer";
import Modal from "./components/Modal";
import styles from "./styles/App.module.css";

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [config, setConfig] = useState({
    buttonIcon: "🔵",
    borderColor: "#0078D7",
    borderRadius: "15px",
    titleBgColor: "#0078D7",
    botBubbleBg: "#E8F5FF",
    botTextColor: "#0078D7",
    userBubbleBg: "#0078D7",
    userTextColor: "#FFFFFF",
    font: "Arial",
  });

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  return (
    <div className={styles.container}>
      <Customizer config={config} setConfig={setConfig} />
      

      {isChatOpen ? (
        <Modal onClose={toggleChat}>
          <ChatBot config={config} /> 
        </Modal>
      ):(
        <button className={styles.chatButton} onClick={toggleChat}>
        Chat with Us
        </button>
      )}
    </div>
  );
};

export default App;



