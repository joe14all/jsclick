import React from 'react';
import PatientProfile from './CaseStudySections/PatientProfile';
import SimulationOverview from './CaseStudySections/SimulationOverview';
import ChallengeItem from './CaseStudySections/ChallengeItem';
import TreatmentStrategy from './CaseStudySections/TreatmentStrategy';
import ResultsMetrics from './CaseStudySections/ResultsMetrics';
import Presentation from './CaseStudySections/Presentation.js';
import ClinicalAssessment from './CaseStudySections/ClinicalAssessment';
import OutcomesGrid from './CaseStudySections/OutcomesGrid';
import Section from '../../Section/Section';

import styles from './CaseStudyDetails.module.css';


const CaseStudyDetails = ({ content }) => {
  const { overview, challenges, solutions, results } = content;
  return (
    <div className={styles.caseStudyDetails}>
      <Section title="Case Overview" icon="📋" initialOpen={false}>
    {content.overview.content.patientProfile ? (
      <PatientProfile data={content.overview.content.patientProfile} />
    ) : (
      <SimulationOverview data={content} />
    )}

{overview.content.presentation && (
    <Presentation data={overview.content.presentation} />
  )}

  {overview.content.clinicalAssessment && (
    <ClinicalAssessment data={overview.content.clinicalAssessment} />
  )}

  </Section>

      <Section title="Clinical Challenges" icon="⚠️">
        <div className={styles.challengesGrid}>
          {challenges.content.map((challenge, index) => (
            <ChallengeItem key={index} challenge={challenge} />
          ))}
        </div>
      </Section>

      <Section title="Treatment Strategy" icon="📅">
        <TreatmentStrategy 
          timeline={solutions.timeline} 
          phases={solutions.content} 
        />
      </Section>

      <Section title="Treatment Outcomes" icon="📈">
        <ResultsMetrics metrics={results.metrics} />
        
                <OutcomesGrid data={results.content} />

      </Section>
    </div>
  );
};

export default CaseStudyDetails;