// components/Tooltip.js

import React from 'react';
// import styles from './tooltip.css'

const Tooltip = ({ text, children }) => {
  return (
    <div className={styles.tooltip}>
      {children}
      <span className={styles.tooltipText}>{text}</span>
    </div>
  );
};

export default Tooltip;