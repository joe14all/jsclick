import React from 'react';
import styles from './ChallengeItem.module.css';

const ChallengeItem = ({ challenge }) => {
  const { details } = challenge;

  return (
    <div className={styles.challengeCard}>
      <div className={styles.challengeHeader}>
        <span 
          className={styles.priorityBadge}
          data-priority={challenge.priority.toLowerCase()}
        >
          {challenge.priority}
        </span>
        <div className={styles.challengeTitleWrapper}>
          <h4 className={styles.challengeTitle}>{challenge.title}</h4>
          <span className={styles.categoryTag} data-category={challenge.category.toLowerCase()}>
            {challenge.category}
          </span>
        </div>
      </div>
      
      <div className={styles.challengeContent}>
        {(details.diagnosis || details.issues?.length > 0 || details.observations?.length > 0) && (
          <div className={styles.sectionGroup}>
            <h5 className={styles.challengeSubtitle}>Key Findings</h5>
            {details.diagnosis && (
              <div className={styles.diagnosisBox}>
                <strong>Diagnosis:</strong> {details.diagnosis}
              </div>
            )}
            {details.issues?.length > 0 && (
              <>
                <h6 className={styles.sectionLabel}>Identified Issues:</h6>
                <ul className={styles.challengeList}>
                  {details.issues.map((issue, i) => (
                    <li key={i}>{issue}</li>
                  ))}
                </ul>
              </>
            )}
            {details.observations?.length > 0 && (
              <>
                <h6 className={styles.sectionLabel}>Clinical Observations:</h6>
                <ul className={styles.challengeList}>
                  {details.observations.map((obs, i) => (
                    <li key={i}>{obs}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}

        {(details.complications?.length > 0 || details.impact) && (
          <div className={styles.sectionGroup}>
            <h5 className={styles.challengeSubtitle}>
              {details.complications?.length > 0 
                ? "Clinical Complications" 
                : "Clinical Impact"}
            </h5>
            {details.complications?.length > 0 ? (
              <>
                <h6 className={styles.sectionLabel}>
                  {details.complications.length > 1 ? 'Complications:' : 'Complication:'}
                </h6>
                <ul className={styles.challengeList}>
                  {details.complications.map((complication, i) => (
                    <li key={i}>{complication}</li>
                  ))}
                </ul>
              </>
            ) : (
              <div className={styles.impactStatement}>
                <p>{details.impact}</p>
              </div>
            )}
          </div>
        )}

        {details.implications?.length > 0 && (
          <div className={styles.implicationsBox}>
            <h5 className={styles.challengeSubtitle}>Treatment Implications</h5>
            <ul className={styles.challengeList}>
              {details.implications.map((imp, i) => (
                <li key={i}>{imp}</li>
              ))}
            </ul>
          </div>
        )}

        {(details.remainingThickness || details.occlusalLoad || details.riskAssessment) && (
          <div className={styles.analysisBox}>
            <h5 className={styles.challengeSubtitle}>Structural Analysis</h5>
            <div className={styles.structuralGrid}>
              {details.remainingThickness && (
                <div className={styles.gridItem}>
                  <label>Remaining Dentin:</label> {details.remainingThickness}
                </div>
              )}
              {details.occlusalLoad && (
                <div className={styles.gridItem}>
                  <label>Occlusal Load:</label> {details.occlusalLoad}
                </div>
              )}
              {details.riskAssessment && (
                <div className={styles.gridItem}>
                  <label>Risk Assessment:</label> {details.riskAssessment}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChallengeItem;
