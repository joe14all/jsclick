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
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>{project.title}</h3>
          <button onClick={onClose} className={styles.closeBtn} aria-label="Close Case Study">
            &times;
          </button>
        </div>

        {/* Content Layout: Carousel & Details */}
        <div className={styles.modalBody}>
          {/* Sticky Carousel */}
          <div className={styles.carouselWrapper}>
            <CaseStudyCarousel
              images={project.caseStudy.carousel}
              activeSlide={activeSlide}
              setActiveSlide={setActiveSlide}
            />
          </div>

          {/* Case Study Details */}
          <div className={styles.detailsWrapper}>
            <CaseStudyDetails content={project.caseStudy.sections} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
