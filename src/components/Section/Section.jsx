// components/Section/Section.js
import React, { useState } from 'react';

import styles from './Section.module.css';

const Section = ({ title, icon, children, initialOpen = false }) => {
    const [isOpen, setIsOpen] = useState(initialOpen);
  
    return (
      <section className={`${styles.section} ${isOpen ? styles.open : ''}`}>
        <div className={styles.sectionHeader} onClick={() => setIsOpen(!isOpen)}>
          <div className={styles.sectionTitleWrapper}>
            <span className={styles.sectionIcon}>{icon}</span>
            <h3 className={styles.sectionTitle}>{title}</h3>
          </div>
          <span className={styles.collapseIcon}>
            {isOpen ? '▼' : '►'}
          </span>
        </div>
        {isOpen && (
          <div className={styles.sectionContent}>
            {children}
          </div>
        )}
      </section>
    );
  };
  export default Section