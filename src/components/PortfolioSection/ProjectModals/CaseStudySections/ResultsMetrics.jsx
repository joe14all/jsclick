import React from 'react';
import { Smile, Brush, HeartPulse, Star } from "lucide-react";
import styles from './ResultsMetrics.module.css';

const ResultsMetrics = ({ metrics }) => {
  if (!metrics) return null;

  return (
    <div className={styles.metricsGrid}>
      {/* --- Patient Satisfaction --- */}
      {metrics.patientSatisfaction && (
        <div className={`${styles.metricItem} ${styles.patientSatisfaction}`}>
          <h5>Patient Satisfaction</h5>
          {metrics.patientSatisfaction.aesthetic && (
            <div className={styles.metricRow}>
              <span className={styles.metricText}>🎨 Aesthetic</span>
              <span className={styles.metricValue}>{metrics.patientSatisfaction.aesthetic}/5</span>
            </div>
          )}
          {metrics.patientSatisfaction.functional && (
            <div className={styles.metricRow}>
              <span className={styles.metricText}>🦷 Functional</span>
              <span className={styles.metricValue}>{metrics.patientSatisfaction.functional}/5</span>
            </div>
          )}
          {metrics.patientSatisfaction.painRelief && (
            <div className={styles.metricRow}>
              <span className={styles.metricText}>💊 Pain Relief</span>
              <span className={styles.metricValue}>{metrics.patientSatisfaction.painRelief}/5</span>
            </div>
          )}
          {metrics.patientSatisfaction.psychological && (
            <div className={styles.metricRow}>
              <span className={styles.metricText}>🧠 Psychological</span>
              <span className={styles.metricValue}>{metrics.patientSatisfaction.psychological}/5</span>
            </div>
          )}
          {metrics.patientSatisfaction.overall && (
            <div className={styles.metricRow}>
              <span className={styles.metricText}>🌟 Overall</span>
              <span className={styles.metricValue}>{metrics.patientSatisfaction.overall}/5</span>
            </div>
          )}
        </div>
      )}

      {/* --- Clinical Improvements --- */}
      {metrics.clinicalImprovement && (
        <div className={`${styles.metricItem} ${styles.clinicalImprovement}`}>
          <h5>Clinical Improvements</h5>
          {metrics.clinicalImprovement.occlusion && (
            <div className={styles.metricRow}>
              <span className={styles.metricText}>🦷 Occlusion</span>
              <span className={styles.metricValue}>
                {metrics.clinicalImprovement.occlusion.pre} → {metrics.clinicalImprovement.occlusion.post}
              </span>
            </div>
          )}
          {metrics.clinicalImprovement.probingDepth && (
            <div className={styles.metricRow}>
              <span className={styles.metricText}>📏 Probing Depth</span>
              <span className={styles.metricValue}>
                {metrics.clinicalImprovement.probingDepth.avgPre}mm → {metrics.clinicalImprovement.probingDepth.avgPost}mm
              </span>
            </div>
          )}
        </div>
      )}

      {/* --- Procedural Success --- */}
      {metrics.proceduralSuccess && (
        <div className={`${styles.metricItem} ${styles.proceduralSuccess}`}>
          <h5>Procedural Success</h5>
          {metrics.proceduralSuccess.anatomyPreservation && (
            <div className={styles.metricRow}>
              <span className={styles.metricText}>🦴 Anatomy Preservation</span>
              <span className={styles.metricValue}>{metrics.proceduralSuccess.anatomyPreservation}%</span>
            </div>
          )}
          {metrics.proceduralSuccess.complicationRate && (
            <div className={styles.metricRow}>
              <span className={styles.metricText}>⚠️ Complication Rate</span>
              <span className={styles.metricValue}>{metrics.proceduralSuccess.complicationRate}%</span>
            </div>
          )}
          {metrics.proceduralSuccess.obturationQuality && (
            <div className={styles.metricRow}>
              <span className={styles.metricText}>🔍 Obturation Quality</span>
              <span className={styles.metricValue}>{metrics.proceduralSuccess.obturationQuality}/5</span>
            </div>
          )}
          {metrics.proceduralSuccess.retentionImprovement && (
          <div className={styles.metricRow}>
            <span className={styles.metricText}>🔄 Retention </span>
            <span className={styles.metricValue}>{metrics.proceduralSuccess.retentionImprovement}%</span>
          </div>
        )}
        {metrics.proceduralSuccess.stabilityEnhancement && (
          <div className={styles.metricRow}>
            <span className={styles.metricText}>⚖️ Stability </span>
            <span className={styles.metricValue}>{metrics.proceduralSuccess.stabilityEnhancement}%</span>
          </div>
        )}
        {metrics.proceduralSuccess.estheticRefinement && (
          <div className={styles.metricRow}>
            <span className={styles.metricText}>🎨 Esthetic </span>
            <span className={styles.metricValue}>{metrics.proceduralSuccess.estheticRefinement}%</span>
          </div>
        )}
         {metrics.proceduralSuccess.fractureResistance && (
          <div className={styles.metricRow}>
            <span className={styles.metricText}>⛓️‍💥 Resistance</span>
            <span className={styles.metricValue}>{metrics.proceduralSuccess.fractureResistance}%</span>
          </div>
        )}
        </div>
      )}

      {/* --- Skill Development --- */}
      {metrics.skillDevelopment && (
        <div className={`${styles.metricItem} ${styles.skillDevelopment}`}>
          <h5>Skill Development</h5>
          {metrics.skillDevelopment.timeEfficiency && (
            <div className={styles.metricRow}>
              <span className={styles.metricText}>⏳ Time Efficiency</span>
              <span className={styles.metricValue}>{metrics.skillDevelopment.timeEfficiency}</span>
            </div>
          )}
          {metrics.skillDevelopment.errorReduction && (
            <div className={styles.metricRow}>
              <span className={styles.metricText}>❌ Error Reduction</span>
              <span className={styles.metricValue}>{metrics.skillDevelopment.errorReduction}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ResultsMetrics;
