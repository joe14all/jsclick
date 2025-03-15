import React from 'react';
import PrimaryButton from '../Buttons/PrimaryButton';
import AnimatedSection from '../AnimatedSection/AnimatedSection';
import styles from './Introduction.module.css';

const Introduction = () => {
  return (
    <AnimatedSection direction="zoom-out" delay={0.2}>
      <section id="introduction" className={styles.introduction}>
        <div className={styles.container}>
          <h2>About Me</h2>
          <p className={styles.description}>
            I am a compassionate, dedicated dentist with over 10 years of diverse experience. 
            Exploring more venues for improvement, utilizing other areas of interest in delivering 
            exceptional patient care tailored for individual needs. Employing vast array of 
            contemporary education to cope with development of dentistry.
          </p>
          <PrimaryButton
            to="/about"
            label="Learn More about me"
            ariaLabel="Learn More about me"
          />
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Introduction;
