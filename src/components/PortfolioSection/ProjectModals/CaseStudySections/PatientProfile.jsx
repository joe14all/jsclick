import React from 'react';
import styles from './PatientProfile.module.css';
import { Coffee, Info } from 'lucide-react';

const PatientProfile = ({ data }) => {
  if (!data) return null;

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

  const profileSections = [
    {
      category: 'General Info',
      items: [
        { label: '🎂 Age', value: data.demographic?.age },
        { label: '🚻 Gender', value: data.demographic?.gender },
        { label: '💼 Occupation', value: data.demographic?.occupation },
        { label: '🎂 Date of Birth', value: data.demographic?.birthDate },
        { label: '🩸 Blood Type', value: data.demographic?.bloodGroup },
        { label: '🗣️ Primary Language', value: data.demographic?.language },
      ],
    },
    {
      category: 'Medical History',
      items: [
        { label: '🏥 Systemic Conditions', value: data.medicalHistory?.systemic },
        { label: '🦷 Dental History', value: data.medicalHistory?.dental },
        { label: '🔪 Previous Surgeries', value: data.medicalHistory?.surgeries },
        { label: '🏥 Hospitalizations', value: data.medicalHistory?.hospitalizations },
        { label: '🤧 Allergies', value: data.medicalHistory?.allergies },
        { label: '💊 Current Medications', value: data.medicalHistory?.medications },
      ],
    },
    {
      category: 'Psychological',
      items: [
        { label: '🧠 State', value: data.psychological?.state },         
        { label: '😟 Concerns', value: data.psychological?.concerns },      
        { label: '🛡️ Coping strategy', value: data.psychological?.copingStrategy },
      ],
    },    
    {
      category: 'Social History',
      items: [
        { label: '🚬 Smoking', value: data.habits?.smoking },
        { label: '🍷 Alcohol Consumption', value: data.habits?.alcohol },
        { label: '🍎 Dietary Habits', value: data.habits?.diet },
      ],
    },
  ];

  return (
    <div className={styles.subsection}>
      <h4 className={styles.subtitle}>🦷 Patient Profile</h4>
      {profileSections.map(({ category, items }) => {
        const filteredItems = items.filter(({ value }) => value);
        if (filteredItems.length === 0) return null; 
  
        return (
          <div key={category} className={styles.categorySection}>
            <h5 className={styles.categoryTitle}>{category}</h5>
            <div className={styles.gridItem}>
              {filteredItems.map(({ label, value }) => (
                <div key={label}>
                  <label className={styles.subtitleLabel}>{label}:</label>
                  {renderList(value)}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
  
};

export default PatientProfile;
