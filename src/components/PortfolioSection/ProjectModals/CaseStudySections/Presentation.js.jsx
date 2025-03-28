// CaseStudySections/Presentation.js
import React from 'react';
import styles from './Presentation.module.css';

const Presentation = ({ data }) => {
  return (
    <div className={styles.subsection}>
      <h4 className={styles.subtitle}>Presentation</h4>
      <label className={styles.subtitleLabel}>Chief Complaint:</label>
      <p className={styles.chiefComplaint}> {data.chiefComplaint}</p>
      <div className={styles.grid}>
        {data.concerns?.length > 0 && (
          <div className={styles.gridItem}>
            <label className={styles.subtitleLabel}>Concerns:</label>
            <ul>
              {data.concerns.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        {data.expectations?.length > 0 && (
          <div className={styles.gridItem}>
            <label className={styles.subtitleLabel}>Expectations:</label>
            <ul>
              {data.expectations.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Presentation;