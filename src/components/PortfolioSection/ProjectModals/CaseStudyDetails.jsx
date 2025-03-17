import React from 'react';
import styles from './CaseStudyDetails.module.css';

const CaseStudyDetails = ({ content }) => {
  const { overview, challenges, solutions, results } = content;

  return (
    <div className={styles.caseStudyDetails}>
      {/* Overview */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Overview</h3>
        <p className={styles.sectionText}>{overview}</p>
      </section>

      {/* Challenges */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Challenges</h3>
        <p className={styles.sectionText}>{challenges}</p>
      </section>

      {/* Solutions */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Solutions</h3>
        <p className={styles.sectionText}>{solutions}</p>
      </section>

      {/* Results */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Results</h3>
        <p className={styles.sectionText}>{results}</p>
      </section>
    </div>
  );
};

export default CaseStudyDetails;
