import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../Buttons/PrimaryButton';
import styles from './ContactCTA.module.css';

const ContactCTA = () => {
  return (
    <section id="contact-cta" className={styles.contactSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Let's Connect</h2>
        <p className={styles.description}>Looking for a dentist? Let's get in contact.</p>
        <PrimaryButton
        to="/Contact"
        label="Contact Me"
        ariaLabel="Contact Me"/>
       
      </div>
    </section>
  );
};

export default ContactCTA;