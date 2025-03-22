import React, { useEffect } from 'react';
import styles from './CaseStudyCarousel.module.css';

const CaseStudyCarousel = ({ images, activeSlide, setActiveSlide }) => {
  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, [images.length, setActiveSlide]);

  // Go to previous slide
  const handlePrev = () => {
    setActiveSlide((activeSlide - 1 + images.length) % images.length);
  };

  // Go to next slide
  const handleNext = () => {
    setActiveSlide((activeSlide + 1) % images.length);
  };

  // Direct slide navigation
  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className={styles.carouselContainer}>
      {/* Dots on top */}
      <div className={styles.dots}>
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`${styles.dot} ${idx === activeSlide ? styles.active : ''}`}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Main Content - Arrows and Slides */}
      <div className={styles.mainContent}>
  <button className={`${styles.carouselControl} ${styles.prev}`} onClick={handlePrev}>
    ‹
  </button>

  {/* Add viewport wrapper */}
  <div className={styles.carouselViewport}>
    <div
      className={styles.carouselInner}
      style={{ transform: `translateX(-${activeSlide * 100}%)` }}
    >
      {images.map((image, index) => (
        <div key={index} className={styles.carouselItem}>
          <img
            src={image.img}
            alt={image.alt || `Slide ${index + 1}`}
            className={styles.carouselImage}
          />
        </div>
      ))}
    </div>
  </div>

  <button className={`${styles.carouselControl} ${styles.next}`} onClick={handleNext}>
    ›
  </button>
</div>
    </div>
  );
};

export default CaseStudyCarousel;
