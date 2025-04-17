import React from 'react';
import styles from './Procedure.module.css';

const Procedure = ({ procedure }) => {
  if (!procedure) return null;

const renderNestedList = (data, depth = 0) => {
  if (!data || data.length === 0) return null;
  
  return (
    <ul className={styles.nestedList} style={{ marginLeft: `${depth * 0.5}rem` }}>
      {data.map((item, index) => {
        if (typeof item === 'object' && !Array.isArray(item)) {
          return (
            <li key={index}>
              {item.label && <strong>{item.label}: </strong>}
              {Array.isArray(item.value) ? renderNestedList(item.value, depth + 1) : item.value}
            </li>
          );
        }
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
};


  const sections = [
    { label: 'Timeline', data: procedure.timeline },
    { label: 'Metrics', data: procedure.metrics },
    { label: 'Materials', data: procedure.materials },
    { label: 'System', data: procedure.system},
    { label: 'Parameters', data: procedure.parameters },
    { label: 'Sequence', data: procedure.sequence },
    
    { label: 'Instruments', data: procedure.instruments },
    { label: 'Strategies', data: procedure.strategies },
    { label: 'Steps', data: procedure.steps },
    { label: 'Risks', data: procedure.risks },
    { label: 'Details', data: procedure.details},
    { label: 'Specs', data: procedure.specifications},
    { label: 'Protocol', data: procedure.protocol},
    { label: 'Activation', data: procedure.activation},
    { label: 'Focus', data: procedure.focus},
    { label: 'Evaluations', data: procedure.evaluations},
    { label: 'Process', data: procedure.process},
    { label: 'Mechanical', data: procedure.mechanical},
    { label: 'Biological', data: procedure.biological},
    { label: 'Esthetic considerations', data: procedure.esthetic},
    { label: 'Features', data: procedure.features},
    { label: 'Checks', data: procedure.checks},
    { label: 'Schedule', data: procedure.schedule},
    { label: 'Considerations', data: procedure.considerations},
    { label: 'Quality Control', data: procedure.qualityControl},
    { label: 'Irrigation', data: procedure.irrigation},
    { label: 'Finishing', data: procedure.finishing },
    { label: 'Tools', data: procedure.tools },
    { label: 'Key Steps', data: procedure.keySteps },
    { label: 'Components', data: procedure.components },

  



  ];

  return (
    <div className={styles.procedureCard}>
      <div className={styles.procedureHeader}>
        <h5>{procedure.type}</h5>
    
        {procedure.category && <span className={styles.procedureCategory}>{procedure.category}</span>}
      </div>
      
      <div className={styles.procedureDetails}>
        {sections.map(({ label, data, ordered }) =>
          data?.length > 0 ? (
            <div key={label}>
              <strong>{label}:</strong>
              {ordered ? <ol className={styles.orderedList}>{renderNestedList(data)}</ol> : renderNestedList(data)}
            </div>
          ) : null
        )}
        
        {procedure.product && <div><strong>Product:</strong> {procedure.product}</div>}
        {procedure.software && <div><strong>Software:</strong> {procedure.software}</div>}
        {procedure.material && <div><strong>Material:</strong> {procedure.material}</div>}
        {procedure.technique && <div><strong>Technique:</strong> {procedure.technique}</div>}
        {procedure.method && <div><strong>Method:</strong> {procedure.method}</div>}
        {procedure.type && <div><strong>Type:</strong> {procedure.type}</div>}
        {procedure.step && <div><strong>Step:</strong> {procedure.step}</div>}
        {procedure.notes && <div><strong>Notes:</strong> {procedure.notes}</div>}
        
        {procedure.outcome && <div className={styles.procedureOutcome}><strong>Outcome ➞</strong> {procedure.outcome}</div>}
      </div>
    </div>
  );
};

export default Procedure;
