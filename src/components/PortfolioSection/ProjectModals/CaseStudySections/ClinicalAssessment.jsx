import React from 'react';
import styles from './ClinicalAssessment.module.css';

const ClinicalAssessment = ({ data }) => {
  const renderList = (items, depth = 0) => {
    if (!items) return null;

    if (Array.isArray(items)) {
      return (
        <ul className={styles.nestedList} style={{ marginLeft: `${depth * 10}px` }}>
          {items.map((item, index) => (
            <li key={index}>{renderList(item, depth + 1)}</li>
          ))}
        </ul>
      );
    }

    if (typeof items === 'object') {
      return (
        <ul className={styles.nestedList} style={{ marginLeft: `${depth * 10}px` }}>
          {Object.entries(items).map(([key, value], index) => (
            <li key={index}>
              <span className={styles.nestedLabel}>{key}:</span>{' '}
              {Array.isArray(value) || typeof value === 'object' ? renderList(value, depth + 1) : value}
            </li>
          ))}
        </ul>
      );
    }

    return <span>{items}</span>;
  };

  const assessmentGroups = [
    { label: 'Oral Hygiene', value: data.oralHygiene },
    { label: 'Periodontal Status', value: data.periodontalStatus },
    { label: 'Existing Work', value: data.existingWork },
    { label: 'Existing Conditions', value: data.existingConditions },
    { label: 'Clinical Findings', value: data.findings },
    { label: 'Radiographic Features', value: data.radiographicFeatures },
    { label: 'Gingival Architecture', value: data.gingivalArchitecture },
    { label: 'Existing Restorations', value: data.existingRestorations },
    { label: 'Ridge Resorption', value: data.ridgeResorption },
    { label: 'Vertical Dimension', value: data.verticalDimension },
    { label: 'Prosthodontic Factors', value: data.prosthodonticFactors },
    { label: 'Oral Condition', value: data.oralCondition },
    { label: 'Diagnostic Data', value: data.diagnosticData },
  ];

  return (
    <div className={styles.subsection}>
      <h4 className={styles.subtitle}>Clinical Assessment</h4>
      <div className={styles.grid}>
        {assessmentGroups.map(({ label, value }) => (
          value && (
            <div key={label} className={styles.gridItem}>
              <label className={styles.subtitleLabel}>{label}: </label>
              {renderList(value)}
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default ClinicalAssessment;
