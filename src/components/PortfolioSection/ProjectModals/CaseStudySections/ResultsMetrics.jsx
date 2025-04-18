import React from 'react';
import { Smile, Brush, HeartPulse, Star } from "lucide-react";
import styles from './ResultsMetrics.module.css';

const ResultsMetrics = ({ metrics }) => {
  if (!metrics) return null;

  return (
    <div className={styles.metricsGrid}>
       {/* --- Bone Gain --- */}
       {metrics.boneGain && (
        <div className={`${styles.metricItem} ${styles.boneGain}`}>
          <h5>Bone Gain</h5>
          {metrics.boneGain.initialGraftHeight && (
            <div className={styles.metricRow}>
              <span className={styles.metricText}>📏 Initial Height</span>
              <span className={styles.metricValue}>{metrics.boneGain.initialGraftHeight}</span>
            </div>
          )}
          {metrics.boneGain.postMaturationHeight && (
            <div className={styles.metricRow}>
              <span className={styles.metricText}>📈 Post-Maturation</span>
              <span className={styles.metricValue}>{metrics.boneGain.postMaturationHeight}</span>
            </div>
          )}
          {metrics.boneGain.resorptionRate && (
            <div className={styles.metricRow}>
              <span className={styles.metricText}>📉 Resorption Rate</span>
              <span className={styles.metricValue}>{metrics.boneGain.resorptionRate}</span>
            </div>
          )}
          {metrics.boneGain.implantStabilityQuotient && (
            <div className={styles.metricRow}>
              <span className={styles.metricText}>⚖️ Stability Quotient</span>
              <span className={styles.metricValue}>{metrics.boneGain.implantStabilityQuotient}</span>
            </div>
          )}
        </div>
      )}
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
          {/* New metrics */}
          {metrics.patientSatisfaction.functionalImprovement && (
            <div className={styles.metricRow}>
              <span className={styles.metricText}>📈 Functional Improvement</span>
              <span className={styles.metricValue}>{metrics.patientSatisfaction.functionalImprovement}/5</span>
            </div>
          )}
          {metrics.patientSatisfaction.comfort && (
            <div className={styles.metricRow}>
              <span className={styles.metricText}>😌 Comfort</span>
              <span className={styles.metricValue}>{metrics.patientSatisfaction.comfort}/5</span>
            </div>
          )}
          {metrics.patientSatisfaction.aestheticIntegration && (
            <div className={styles.metricRow}>
              <span className={styles.metricText}>🖼️ Aesthetic Integration</span>
              <span className={styles.metricValue}>{metrics.patientSatisfaction.aestheticIntegration}/5</span>
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

          {metrics.clinicalImprovement.overjet && (
            <div className={styles.metricRow}>
              <span className={styles.metricText}>📐 Overjet</span>
              <span className={styles.metricValue}>
                {metrics.clinicalImprovement.overjet.initial}mm → {metrics.clinicalImprovement.overjet.final}mm ({metrics.clinicalImprovement.overjet.change})
              </span>
            </div>
          )}

          {metrics.clinicalImprovement.overbite && (
            <div className={styles.metricRow}>
              <span className={styles.metricText}>📐 Overbite</span>
              <span className={styles.metricValue}>
                {metrics.clinicalImprovement.overbite.initial}mm → {metrics.clinicalImprovement.overbite.final}mm ({metrics.clinicalImprovement.overbite.change})
              </span>
            </div>
          )}

          {metrics.clinicalImprovement.archExpansion && (
            <>
              <div className={styles.metricRow}>
                <span className={styles.metricText}>🦷 Arch Expansion (Upper)</span>
                <span className={styles.metricValue}>
                  {metrics.clinicalImprovement.archExpansion.upper}
                </span>
              </div>
              <div className={styles.metricRow}>
                <span className={styles.metricText}>🦷 Arch Expansion (Lower)</span>
                <span className={styles.metricValue}>
                  {metrics.clinicalImprovement.archExpansion.lower}
                </span>
              </div>
            </>
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
          {metrics.proceduralSuccess.pathOfInsertionClarity && (
      <div className={styles.metricRow}>
        <span className={styles.metricText}>📐 Path of Insertion Clarity</span>
        <span className={styles.metricValue}>{metrics.proceduralSuccess.pathOfInsertionClarity}</span>
      </div>
    )}
      {metrics.proceduralSuccess.undercutIdentificationAccuracy && (
        <div className={styles.metricRow}>
          <span className={styles.metricText}>📊 Undercut Identification Accuracy</span>
          <span className={styles.metricValue}>{metrics.proceduralSuccess.undercutIdentificationAccuracy}</span>
        </div>
      )}
      {metrics.proceduralSuccess.designCompleteness && (
        <div className={styles.metricRow}>
          <span className={styles.metricText}>✅ Design Completeness</span>
          <span className={styles.metricValue}>{metrics.proceduralSuccess.designCompleteness}</span>
        </div>
      )}
       {metrics.proceduralSuccess.anatomyPreservation && (
            <div className={styles.metricRow}>
              <span className={styles.metricText}>🦴 Anatomy Preservation</span>
              <span className={styles.metricValue}>{metrics.proceduralSuccess.anatomyPreservation}%</span>
            </div>
          )}
          {/* New metrics */}
          {metrics.proceduralSuccess.graftIntegration && (
            <div className={styles.metricRow}>
              <span className={styles.metricText}>🩺 Graft Integration</span>
              <span className={styles.metricValue}>{metrics.proceduralSuccess.graftIntegration}%</span>
            </div>
          )}
          {metrics.proceduralSuccess.sinusMembraneIntegrity && (
            <div className={styles.metricRow}>
              <span className={styles.metricText}>📜 Membrane Integrity</span>
              <span className={styles.metricValue}>{metrics.proceduralSuccess.sinusMembraneIntegrity}</span>
            </div>
          )}
          {metrics.proceduralSuccess.infectionStatus && (
            <div className={styles.metricRow}>
              <span className={styles.metricText}>🦠 Infection Status</span>
              <span className={styles.metricValue}>{metrics.proceduralSuccess.infectionStatus}</span>
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
          {metrics.skillDevelopment.surveyorHandlingProficiency && (
      <div className={styles.metricRow}>
        <span className={styles.metricText}>🛠️ Surveyor Handling</span>
        <span className={styles.metricValue}>{metrics.skillDevelopment.surveyorHandlingProficiency}</span>
      </div>
    )}
    {metrics.skillDevelopment.designRationaleArticulation && (
      <div className={styles.metricRow}>
        <span className={styles.metricText}>🗣️ Design Rationale</span>
        <span className={styles.metricValue}>{metrics.skillDevelopment.designRationaleArticulation}</span>
      </div>
    )}
 
        </div>
      )}
    </div>
  );
};

export default ResultsMetrics;
