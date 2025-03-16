import React from 'react';
import { motion } from 'framer-motion';
import styles from './Philosophy.module.css';
import DentistryPhoto from '../../assets/images/Bio/dentalPhoto.jpg';
import LearningPhoto from '../../assets/images/Bio/learningPhoto.jpg';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const PhilosophySection = () => {
  return (
    <section className={styles.philosophySection}>
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        My Philosophy
      </motion.h2>

      {/* Part 1: Patient-Centered Approach */}
      <motion.div
        className={styles.card}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className={styles.image} style={{ backgroundImage: `url(${DentistryPhoto})` }}></div>
        <div className={styles.text}>
          <p>
            I believe every patient deserves care that goes beyond fixing problems — care that supports their long-term well-being. Dentistry is both art and science, guided by precision, compassion, and trust. My goal is to make every treatment a thoughtful collaboration, focused on what truly matters to you.
          </p>
        </div>
      </motion.div>

      {/* Part 2: Lifelong Learning */}
      <motion.div
        className={`${styles.card} ${styles.reverse}`}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className={styles.image} style={{ backgroundImage: `url(${LearningPhoto})` }}></div>
        <div className={styles.text}>
          <p>
            Returning to dental school at UCLA was a leap of faith — a reflection of my deep commitment to learning. Dentistry is always evolving, and I’m passionate about staying at the forefront so my patients receive the most thoughtful and effective care possible.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default PhilosophySection;
