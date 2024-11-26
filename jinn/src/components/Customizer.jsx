import React from 'react';
import styles from '../styles/Customizer.module.css';

const Customizer = ({ config, setConfig }) => {
  const handleChange = (key, value) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className={styles.customizer}>
      <h2 className={styles.title}>Customize Chat Bot</h2>

      <div className={styles.field}>
        <label>Button Icon</label>
        <input
          type="text"
          value={config.buttonIcon}
          onChange={(e) => handleChange('buttonIcon', e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <label>Border Color</label>
        <input
          type="color"
          value={config.borderColor}
          onChange={(e) => handleChange('borderColor', e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <label>Border Radius</label>
        <input
          type="range"
          min="0"
          max="30"
          value={parseInt(config.borderRadius)}
          onChange={(e) => handleChange('borderRadius', `${e.target.value}px`)}
        />
      </div>

      <div className={styles.field}>
        <label>Title Background Color</label>
        <input
          type="color"
          value={config.titleBgColor}
          onChange={(e) => handleChange('titleBgColor', e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <label>Bot Chat Bubble Background</label>
        <input
          type="color"
          value={config.botBubbleBg}
          onChange={(e) => handleChange('botBubbleBg', e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <label>Bot Text Color</label>
        <input
          type="color"
          value={config.botTextColor}
          onChange={(e) => handleChange('botTextColor', e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <label>User Chat Bubble Background</label>
        <input
          type="color"
          value={config.userBubbleBg}
          onChange={(e) => handleChange('userBubbleBg', e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <label>User Text Color</label>
        <input
          type="color"
          value={config.userTextColor}
          onChange={(e) => handleChange('userTextColor', e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <label>Text Font</label>
        <select
          value={config.font}
          onChange={(e) => handleChange('font', e.target.value)}
        >
          <option value="Arial">Arial</option>
          <option value="Verdana">Verdana</option>
          <option value="Tahoma">Tahoma</option>
          <option value="Times New Roman">Times New Roman</option>
        </select>
      </div>
    </div>
  );
};

export default Customizer;
