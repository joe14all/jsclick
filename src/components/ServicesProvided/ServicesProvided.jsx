// ServicesProvided.jsx
import React from 'react';
import PrimaryButton from '../Buttons/PrimaryButton';
import styles from "./ServicesProvided.module.css";
import ServiceItem from './ServiceItem/ServiceItem';
import servicesData from './ServiceItem/servicesData';
import AnimatedSection from '../AnimatedSection/AnimatedSection';

const ServicesProvided = () => {
  return (
    <AnimatedSection direction="zoom-out" delay={0.1}> {/* OUTER WRAPPER FOR SECTION */}
      <section id="services" className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>My Skills</h2>
          <div className={styles.serviceGrid}>
            {servicesData.map((service) => (
              <ServiceItem
                key={service.id || service.title}
                icon={service.icon}
                title={service.title}
                items={service.items}
              />
            ))}
          </div>
          <div className={styles.buttonWrapper}>
            <PrimaryButton
              to="/portfolio"
              label="See Examples of My Work"
              ariaLabel="See examples of my work in portfolio"
            />
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default ServicesProvided;
