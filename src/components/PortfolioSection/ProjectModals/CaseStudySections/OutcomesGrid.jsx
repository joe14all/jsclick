import React from 'react';
import styles from './OutcomesGrid.module.css';

const OutcomesGrid = ({ data }) => {
  const hasAchievements = data?.achievements?.length > 0;
  const hasFeedback =
    data?.patientFeedback?.quote ||
    data?.patientFeedback?.improvementsNoted?.length > 0 ||
    data?.patientFeedback?.improvementsExpected?.length > 0;
  const hasLimitations =
    data?.limitations?.noted?.length > 0 ||
    data?.limitations?.futureConsiderations?.length > 0 ||
    data?.limitations?.corrections?.length > 0;
  const hasTechnicalSuccess = Boolean(data?.technicalSuccess);

  const hasSatisfaction = Boolean(data?.metrics?.patientSatisfaction);
  const hasClinicalImprovements = Boolean(data?.metrics?.clinicalImprovements);
  const hasRetentionPlan = Boolean(data?.retentionPlan?.length > 0);

  if (
    !hasAchievements &&
    !hasFeedback &&
    !hasLimitations &&
    !hasTechnicalSuccess &&
    !hasSatisfaction &&
    !hasClinicalImprovements &&
    !hasRetentionPlan
  ) {
    return null;
  }

  const renderDentureItem = (label, dentureData) => {
    if (!dentureData) return null;
    const { maxilla, mandible } = dentureData;
    return (
      <section>
        <strong>{label}:</strong>
        <ul>
          {maxilla && <li><strong>Maxilla:</strong> {maxilla}</li>}
          {mandible && <li><strong>Mandible:</strong> {mandle}</li>}
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
          {(data.patientFeedback.improvementsNoted?.length > 0 ||
            data.patientFeedback.improvementsExpected?.length > 0) && (
            <ul>
              {/* legacy key */}
              {data.patientFeedback.improvementsNoted?.map((item, i) => (
                <li key={`noted-${i}`}>{item}</li>
              ))}
              {/* new key */}
              {data.patientFeedback.improvementsExpected?.map((item, i) => (
                <li key={`expected-${i}`}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      {hasSatisfaction && (
        <div className={styles.outcomeSection}>
          <h5>Patient Satisfaction</h5>
          <ul>
            <li><strong>Aesthetic:</strong> {data.metrics.patientSatisfaction.aesthetic}</li>
            <li><strong>Functional:</strong> {data.metrics.patientSatisfaction.functional}</li>
            <li><strong>Overall:</strong> {data.metrics.patientSatisfaction.overall}</li>
          </ul>
        </div>
      )}

      {hasClinicalImprovements && (
        <div className={styles.outcomeSection}>
          <h5>Clinical Improvements</h5>
          <ul>
            <li>
              <strong>Overjet:</strong> {data.metrics.clinicalImprovements.overjet.initial} →{" "}
              {data.metrics.clinicalImprovements.overjet.final} (
              {data.metrics.clinicalImprovements.overjet.change})
            </li>
            <li>
              <strong>Overbite:</strong> {data.metrics.clinicalImprovements.overbite.initial} →{" "}
              {data.metrics.clinicalImprovements.overbite.final} (
              {data.metrics.clinicalImprovements.overbite.change})
            </li>
            <li>
              <strong>Arch Expansion:</strong> {data.metrics.clinicalImprovements.archExpansion.upper};{" "}
              {data.metrics.clinicalImprovements.archExpansion.lower}
            </li>
          </ul>
        </div>
      )}

      {hasTechnicalSuccess && (
        <div className={styles.outcomeSection}>
          <h5>Technical Success</h5>

          {(data.technicalSuccess.dentureStability ||
            data.technicalSuccess.dentureRetention ||
            data.technicalSuccess.dentureSupport) && (
            <section>
              <strong>Denture</strong>
              <div className={styles.outcomeGroup}>
                {renderDentureItem("Stability", data.technicalSuccess.dentureStability)}
                {renderDentureItem("Retention", data.technicalSuccess.dentureRetention)}
                {renderDentureItem("Support", data.technicalSuccess.dentureSupport)}
              </div>
            </section>
          )}

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
          {data.technicalSuccess.crownPerformance && (
            <section>
              <strong>Crown Performance</strong>
              <ul>
                {data.technicalSuccess.crownPerformance.marginal && (
                  <li><strong>Marginal:</strong> {data.technicalSuccess.crownPerformance.marginal}</li>
                )}
                {data.technicalSuccess.crownPerformance.axial && (
                  <li><strong>Axial:</strong> {data.technicalSuccess.crownPerformance.axial}</li>
                )}
                {data.technicalSuccess.crownPerformance.contacts && (
                  <li><strong>Contacts:</strong> {data.technicalSuccess.crownPerformance.contacts}</li>
                )}
                {data.technicalSuccess.crownPerformance.occlusion && (
                  <li><strong>Occlusion:</strong> {data.technicalSuccess.crownPerformance.occlusion}</li>
                )}
                {data.technicalSuccess.crownPerformance.esthetics && (
                  <li><strong>Esthetics:</strong> {data.technicalSuccess.crownPerformance.esthetics}</li>
                )}
              </ul>
            </section>
          )}
          {data.technicalSuccess.implantStability && (
            <section>
              <strong>Implant Stability</strong>
              <ul>
                {data.technicalSuccess.implantStability.ISQ && (
                  <li><strong>ISQ:</strong> {data.technicalSuccess.implantStability.ISQ}</li>
                )}
                {data.technicalSuccess.implantStability.BoneLoss && (
                  <li><strong>Bone Loss:</strong> {data.technicalSuccess.implantStability.BoneLoss}</li>
                )}
              </ul>
            </section>
          )}

{data.technicalSuccess.alignmentAndOcclusion && (
      <section>
        <strong>Alignment & Occlusion</strong>
        <ul>
          {data.technicalSuccess.alignmentAndOcclusion.alignment && (
            <>
              <li><strong>Anterior Alignment:</strong> {data.technicalSuccess.alignmentAndOcclusion.alignment.anterior}</li>
              <li><strong>Posterior Alignment:</strong> {data.technicalSuccess.alignmentAndOcclusion.alignment.posterior}</li>
            </>
          )}
          {data.technicalSuccess.alignmentAndOcclusion.occlusion && (
            <>
              <li><strong>Overjet:</strong> {data.technicalSuccess.alignmentAndOcclusion.occlusion.overjet}</li>
              <li><strong>Overbite:</strong> {data.technicalSuccess.alignmentAndOcclusion.occlusion.overbite}</li>
            </>
          )}
        </ul>
      </section>
    )}
        </div>
      )}

      {hasRetentionPlan && (
        <div className={styles.outcomeSection}>
          <h5>Retention &amp; Follow‑Up</h5>
          <ul>
            {data.retentionPlan.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {hasLimitations && (
        <div className={styles.outcomeSection}>
          <h5>Limitations &amp; Future Considerations</h5>
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
