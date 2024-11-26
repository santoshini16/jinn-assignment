import React from 'react';
import styles from '../styles/ChatBot.module.css';

const ChatBot = ({ config }) => {
  const {
    buttonIcon,
    borderColor,
    borderRadius,
    titleBgColor,
    botBubbleBg,
    botTextColor,
    userBubbleBg,
    userTextColor,
    font,
  } = config;

  return (
    <div
      className={styles.chatbot}
      style={{
        border: `2px solid ${borderColor}`,
        borderRadius,
        fontFamily: font,
      }}
    >
      <div
        className={styles.title}
        style={{
          backgroundColor: titleBgColor,
        }}
      >
        <span>{buttonIcon}</span>
        <span>Jinn Live - Demo Bot</span>
      </div>

      <div className={styles.chatArea}>
        <div
          className={styles.botMessage}
          style={{
            backgroundColor: botBubbleBg,
            color: botTextColor,
          }}
        >
          Hello! How can I assist you today?
        </div>
        <div
          className={styles.userMessage}
          style={{
            backgroundColor: userBubbleBg,
            color: userTextColor,
          }}
        >
          I need some help.
        </div>
      </div>

      <div className={styles.inputArea}>
        <input
          type="text"
          placeholder="Ask us anything..."
          className={styles.input}
        />
        <button className={styles.sendButton}>{buttonIcon}</button>
      </div>
    </div>
  );
};

export default ChatBot;
