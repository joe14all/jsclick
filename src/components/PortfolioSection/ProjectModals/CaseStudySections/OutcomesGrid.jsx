import React from 'react';
import styles from './OutcomesGrid.module.css';

const OutcomesGrid = ({ data }) => {
  const hasAchievements = data?.achievements?.length > 0;
  const hasFeedback = data?.patientFeedback?.quote || data?.patientFeedback?.improvementsNoted?.length > 0;
  const hasLimitations = data?.limitations?.noted?.length > 0 || data?.limitations?.futureConsiderations?.length > 0;
  const hasTechnicalSuccess = data?.technicalSuccess?.dentureStability;

  if (!hasAchievements && !hasFeedback && !hasLimitations && !hasTechnicalSuccess) return null;

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

{hasTechnicalSuccess && (
  <div className={styles.outcomeSection}>
    <h5>Technical Success</h5>

    {data.technicalSuccess.dentureStability && (
      <div>
        <strong>Stability:</strong>
        <ul>
          {data.technicalSuccess.dentureStability.maxilla && (
            <li><strong>Maxilla:</strong> {data.technicalSuccess.dentureStability.maxilla}</li>
          )}
          {data.technicalSuccess.dentureStability.mandible && (
            <li><strong>Mandible:</strong> {data.technicalSuccess.dentureStability.mandible}</li>
          )}
        </ul>
      </div>
    )}

    {data.technicalSuccess.dentureRetention && (
      <div>
        <strong>Retention:</strong>
        <ul>
          {data.technicalSuccess.dentureRetention.maxilla && (
            <li><strong>Maxilla:</strong> {data.technicalSuccess.dentureRetention.maxilla}</li>
          )}
          {data.technicalSuccess.dentureRetention.mandible && (
            <li><strong>Mandible:</strong> {data.technicalSuccess.dentureRetention.mandible}</li>
          )}
        </ul>
      </div>
    )}

    {data.technicalSuccess.dentureSupport && (
      <div>
        <strong>Support:</strong>
        <ul>
          {data.technicalSuccess.dentureSupport.maxilla && (
            <li><strong>Maxilla:</strong> {data.technicalSuccess.dentureSupport.maxilla}</li>
          )}
          {data.technicalSuccess.dentureSupport.mandible && (
            <li><strong>Mandible:</strong> {data.technicalSuccess.dentureSupport.mandible}</li>
          )}
        </ul>
      </div>
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
          {data.limitations.corrections?.length > 0 && (
            <div>
              <strong>Corrections:</strong>
              <ul>
                {data.limitations.corrections.map((item, i) => (
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
