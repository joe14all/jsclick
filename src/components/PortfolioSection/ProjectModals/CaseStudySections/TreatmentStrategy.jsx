// TreatmentStrategy.js
import React from 'react';
import Procedure from './Procedure';
import styles from './TreatmentStrategy.module.css';

const TreatmentStrategy = ({ timeline, phases }) => {
  return (
    <div className={styles.strategyContainer}>
      {timeline?.phases?.length > 0 && (
        <div className={styles.timelineSection}>
          <h3 className={styles.timelineTitle}>Treatment Timeline</h3>
          <div className={styles.timelinePhases}>
            {timeline.phases.map((phase, index) => (
              <div key={index} className={styles.phaseCard}>
                <div className={styles.phaseHeader}>
                  <span className={styles.phaseBadge}>Phase {phase.phase}</span>
                  <span className={styles.phaseDuration}>{phase.duration}</span>
                  {phase.subfocus && <span className={styles.phaseSubfocus}>{phase.subfocus}</span>}
                </div>
                {phase.focus && <p className={styles.phaseFocus}>{phase.focus}</p>}
                {phase.considerations && (
                  <div className={styles.phaseConsiderations}>
                    {phase.considerations.map((c, i) => (
                      <span key={i} className={styles.considerationPill}>{c}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {phases?.length > 0 && (
        <div className={styles.treatmentPhases}>
          {phases.map((phase, index) => (
            <div key={index} className={styles.phaseSection}>
              {phase.title && <h4 className={styles.phaseTitle}>{phase.title}</h4>}
              
              {phase.subtitle && <p className={styles.phaseSubtitle}>{phase.subtitle}</p>}
              
              {phase.objectives?.length > 0 && (
                <div className={styles.objectivesList}>
                  {phase.objectives.map((obj, i) => (
                    <span key={i} className={styles.objectivePill}>
                      {obj}
                      {phase.objectiveMetrics?.[i] && (
                        <span className={styles.objectiveMetric}>{phase.objectiveMetrics[i]}</span>
                      )}
                    </span>
                  ))}
                </div>
              )}

              {phase.procedures?.length > 0 && (
                <div className={styles.proceduresGrid}>
                  {phase.procedures.map((procedure, i) => (
                    <Procedure key={i} procedure={procedure} />
                  ))}
                </div>
              )}

              {phase.notes && (
                <div className={styles.phaseNotes}>
                  <strong>Clinical Notes:</strong> {phase.notes}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


export default TreatmentStrategy;