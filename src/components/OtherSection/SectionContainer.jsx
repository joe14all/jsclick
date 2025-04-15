import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../AnimatedSection/AnimatedSection';
import PrimaryButton from '../Buttons/PrimaryButton';
import styles from './SectionContainer.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const SectionContainer = ({ 
  title, 
  subsections, 
  ctas = [], 
  theme = 'light' 
}) => {
  console.log( "CTA", ctas)
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <AnimatedSection className={`${styles.section} ${styles[theme]}`}>
      <div className={styles.sectionContainer}>
        <motion.h2 
          className={styles.sectionTitle}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
        >
          {title}
        </motion.h2>

        {subsections.map((subsection, index) => (
          <motion.div
            key={index}
            className={`${styles.subsection} ${index % 2 !== 0 ? styles.alternate : ''}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={index + 1}
          >
            {subsection.badge && <span className={styles.badge}>{subsection.badge}</span>}
            {subsection.title && <h3 className={styles.subsectionTitle}>{subsection.title}</h3>}
            {subsection.image && (
              <div className={styles.imageContainer}>
                <img 
                  src={subsection.image} 
                  alt={subsection.imageAlt || ''}
                  className={styles.subsectionImage}
                />
              </div>
            )}
            <div className={styles.subsectionContent}>
              {typeof subsection.content === 'string' ? <p>{subsection.content}</p> : subsection.content}

              {subsection.items && (
                <ul className={styles.subsectionList}>
                  {subsection.items.map((item, i) => (
                    <li key={i} className={styles.listItem}>{item}</li>
                  ))}
                </ul>
              )}

{subsection.certificates?.length > 0 && (
  <div className={styles.certificatesContainer}>
    <h4 className={styles.certificatesTitle}>Certificates</h4>
    <div className={styles.certificatesGrid}>
      {subsection.certificates.map((cert, i) => (
        <div 
          key={i} 
          className={styles.certificateItem} 
          onClick={() => openImage(cert.pdf)}
        >
          <img 
            src={cert.thumbnail} 
            alt={`Certificate ${i + 1}`} 
            className={styles.certificateThumb} 
          />
          <p className={styles.certificateTitle}>{cert.title}</p>
        </div>
      ))}
    </div>
  </div>
)}

            </div>
          </motion.div>
        ))}

        {ctas.length > 0 && (
          <motion.div
            className={styles.sectionCTAs}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={subsections.length + 1}
          >
            {ctas.map((cta, index) => (
              <PrimaryButton
  key={index}
  to={cta.to}
  label={cta.label}
  ariaLabel={cta.ariaLabel}
  className={styles.ctaButton}
  onClick={cta.onClick}
/>

            ))}
          </motion.div>
        )}
      </div>

      {selectedImage && (
        <div className={styles.modalOverlay} onClick={closeImage}>
          <div className={styles.modalWrapper} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeImage}>×</button>
            <embed src={selectedImage} type="application/pdf" className={styles.fullscreenPdf} />
          </div>
        </div>
      )}


    </AnimatedSection>
  );
};

export default SectionContainer;
