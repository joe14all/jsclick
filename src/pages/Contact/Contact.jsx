import React from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection';

import { Mail, Send, User, MessageSquare } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <MainLayout isHomePage={false} currentPage="Contact">
      <div className={styles.contactContainer}>
        <div className={styles.contactContent}>
          {/* LEFT SECTION */}
          <AnimatedSection direction="right" delay={0.4}>
          <div className={styles.contactInfo}>
            <h1 className={styles.pageTitle}>Get in Touch</h1>
            <p className={styles.subtitle}>Open for professional collaboration and opportunities</p>
          </div>
          </AnimatedSection>


          {/* RIGHT SECTION */}
          <AnimatedSection direction="up" delay={1}>

          <form className={styles.contactForm} action="https://formspree.io/f/your-form-id" method="POST">
            <div className={styles.formGroup}>
              <User className={styles.formIcon} />
              <input type="text" name="name" placeholder="Your Name" required />
            </div>

            <div className={styles.formGroup}>
              <Mail className={styles.formIcon} />
              <input type="email" name="email" placeholder="Your Email" required />
            </div>

            <div className={styles.formGroup}>
              <MessageSquare className={styles.formIcon} />
              <input type="text" name="subject" placeholder="Subject" required />
            </div>

            <div className={styles.formGroup}>
              <MessageSquare className={styles.formIcon} />
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>

            <button type="submit" className={styles.submitButton}>
              <Send className={styles.buttonIcon} />
              Send Message
            </button>
          </form>
          </AnimatedSection>

        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
