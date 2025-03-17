// components/PortfolioSection/ProjectModals/ProjectModal.jsx
import { useState, useEffect } from 'react';
import styles from './ProjectModal.module.css';
import CaseStudyCarousel from './CaseStudyCarousel';
import CaseStudyDetails from './CaseStudyDetails';

const ProjectModal = ({ project, onClose }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
      >
        {/* Header */}
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>{project.title}</h3>
          <button onClick={onClose} className={styles.closeBtn} aria-label="Close Case Study">
            &times;
          </button>
        </div>

        {/* Carousel */}
        <CaseStudyCarousel
          images={project.caseStudy.carousel}
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
        />

        {/* Case Study Details */}
        <CaseStudyDetails content={project.caseStudy.sections} />
      </div>
    </div>
  );
};

export default ProjectModal;
