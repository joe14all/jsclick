import React from 'react';
import PrimaryButton from '../Buttons/PrimaryButton'; 
import AnimatedSection from '../AnimatedSection/AnimatedSection';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <AnimatedSection direction="up" delay={0.1}>
      <section id="hero" className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Dr. Joseph Shenouda</h1>
          <h2>General Dentist</h2>
          <p>Bridging Science and Art in Dentistry</p>
          
        
          <PrimaryButton 
            to="#featured-work" 
            label="View My Work" 
            ariaLabel="View my featured work" 
          />
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Hero;
