import React from 'react';
import styles from './OutcomesGrid.module.css';

const OutcomesGrid = ({ data }) => {
  const hasAchievements = data?.achievements?.length > 0;
  const hasFeedback = data?.patientFeedback?.quote || data?.patientFeedback?.improvementsNoted?.length > 0;
  const hasLimitations = data?.limitations?.noted?.length > 0 || data?.limitations?.futureConsiderations?.length > 0;

  if (!hasAchievements && !hasFeedback && !hasLimitations) return null;

  return (
    <div className={styles.outcomesGrid}>
      {hasAchievements && (
        <div className={styles.outcomeSection}>
          <h5>Achievements</h5>
          <ul>
            {data.achievements.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {hasFeedback && (
        <div className={styles.outcomeSection}>
          <h5>Patient Feedback</h5>
          {data.patientFeedback.quote && (
            <blockquote>{data.patientFeedback.quote}</blockquote>
          )}
          {data.patientFeedback.improvementsNoted?.length > 0 && (
            <ul>
              {data.patientFeedback.improvementsNoted.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      {hasLimitations && (
        <div className={styles.outcomeSection}>
          <h5>Limitations & Future Considerations</h5>
          {data.limitations.noted?.length > 0 && (
            <div>
              <strong>Noted Limitations:</strong>
              <ul>
                {data.limitations.noted.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          {data.limitations.futureConsiderations?.length > 0 && (
            <div>
              <strong>Future Plans:</strong>
              <ul>
                {data.limitations.futureConsiderations.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default OutcomesGrid;