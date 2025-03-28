import React from 'react';
import styles from './SimulationOverview.module.css';


const SimulationOverview = ({ data }) => {
  console.log ("Data",data)
  const { simulationContext, proceduralFocus } = data?.overview?.content || {};

  // Check if any simulation context data exists
  const hasSimulationContext = Boolean(
    simulationContext?.program ||
    simulationContext?.objective ||
    simulationContext?.difficultyLevel ||
    simulationContext?.modelType
  );

  // Check if any procedural focus data exists
  const hasProceduralFocus = Boolean(
    proceduralFocus?.keySkills?.length ||
    proceduralFocus?.successCriteria?.length
  );

  if (!hasSimulationContext && !hasProceduralFocus) return null;

  return (
    <div className={styles.contextSection}>
      {/* Simulation Parameters Section */}
      {hasSimulationContext && (
        <div className={styles.simulationParameters}>
          <h4 className={styles.sectionTitle}>Simulation Parameters</h4>
          <div className={styles.parameterGrid}>
            {simulationContext.program && (
              <div className={styles.parameterCard}>
                <span className={styles.parameterLabel}>Training Program:</span>
                <span className={styles.parameterValue}>
                  {simulationContext.program}
                </span>
              </div>
            )}
            
            {simulationContext.objective && (
              <div className={styles.parameterCard}>
                <span className={styles.parameterLabel}>Primary Objective:</span>
                <span className={styles.parameterValue}>
                  {simulationContext.objective}
                </span>
              </div>
            )}
            
            {simulationContext.difficultyLevel && (
              <div className={styles.parameterCard}>
                <span className={styles.parameterLabel}>Difficulty Level:</span>
                <span className={styles.parameterValue}>
                  {simulationContext.difficultyLevel}
                </span>
              </div>
            )}
            
            {simulationContext.modelType && (
              <div className={styles.parameterCard}>
                <span className={styles.parameterLabel}>Model Type:</span>
                <span className={styles.parameterValue}>
                  {simulationContext.modelType}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Training Objectives Section */}
      {hasProceduralFocus && (
        <div className={styles.trainingObjectives}>
          <h4 className={styles.sectionTitle}>Training Objectives</h4>
          
          {proceduralFocus.keySkills?.length > 0 && (
            <div className={styles.objectivesBlock}>
              <h5 className={styles.objectiveSubtitle}>Core Competencies</h5>
              <ul className={styles.competencyList}>
                {proceduralFocus.keySkills.map((skill, index) => (
                  <li key={index} className={styles.competencyItem}>
                    <span className={styles.listBullet}>▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {proceduralFocus.successCriteria?.length > 0 && (
            <div className={styles.objectivesBlock}>
              <h5 className={styles.objectiveSubtitle}>Success Benchmarks</h5>
              <ul className={styles.benchmarkList}>
                {proceduralFocus.successCriteria.map((criteria, index) => (
                  <li key={index} className={styles.benchmarkItem}>
                    <span className={styles.checkmarkIcon}>✓</span>
                    {criteria}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SimulationOverview;