import React from 'react';
import styles from './OutcomesGrid.module.css';

const OutcomesGrid = ({ data }) => {
  const hasAchievements = data?.achievements?.length > 0;
  const hasFeedback = data?.patientFeedback?.quote || data?.patientFeedback?.improvementsNoted?.length > 0;
  const hasLimitations = data?.limitations?.noted?.length > 0 || data?.limitations?.futureConsiderations?.length > 0;
  const hasTechnicalSuccess = data?.technicalSuccess?.dentureStability;

  if (!hasAchievements && !hasFeedback && !hasLimitations && !hasTechnicalSuccess) return null;
  const renderDentureItem = (label, data) => {
    if (!data) return null;
  
    const { maxilla, mandible } = data;
  
    return (
      <section>
        <strong>{label}:</strong>
        <ul>
          {maxilla && <li><strong>Maxilla:</strong> {maxilla}</li>}
          {mandible && <li><strong>Mandible:</strong> {mandible}</li>}
        </ul>
      </section>
    );
  };
  

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

          <section>
            <strong>Denture</strong>
            <div className={styles.outcomeGroup}>
              {renderDentureItem("Stability", data.technicalSuccess.dentureStability)}
              {renderDentureItem("Retention", data.technicalSuccess.dentureRetention)}
              {renderDentureItem("Support", data.technicalSuccess.dentureSupport)}
            </div>
          </section>

          {data.technicalSuccess.crownFit && (
            <section>
              <strong>Crown Fit</strong>
              <ul>
                {data.technicalSuccess.crownFit.marginal && (
                  <li><strong>Marginal:</strong> {data.technicalSuccess.crownFit.marginal}</li>
                )}
                {data.technicalSuccess.crownFit.axial && (
                  <li><strong>Axial:</strong> {data.technicalSuccess.crownFit.axial}</li>
                )}
                 {data.technicalSuccess.crownFit.contacts && (
                  <li><strong>Contacts:</strong> {data.technicalSuccess.crownFit.contacts}</li>
                )}
              </ul>
            </section>
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
