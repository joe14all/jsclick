import React, { useEffect, useRef } from 'react';
import styles from './CaseStudyCarousel.module.css';

const CaseStudyCarousel = ({ images, activeSlide, setActiveSlide }) => {
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % images.length);
    }, 5000);
  };

  const pauseAndResumeAutoSlide = () => {
    // Clear existing timers
    clearInterval(intervalRef.current);
    clearTimeout(timeoutRef.current);
    
    // Restart auto-slide after 10 seconds
    timeoutRef.current = setTimeout(startAutoSlide, 10000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, [images.length]);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + images.length) % images.length);
    pauseAndResumeAutoSlide();
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % images.length);
    pauseAndResumeAutoSlide();
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
    pauseAndResumeAutoSlide();
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

        <div className={styles.carouselViewport}>
          <div
            className={styles.carouselInner}
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {images.map((item, index) => (
              <div key={index} className={styles.carouselItem}>
                {item.video ? (
                  <video
                    src={item.video}
                    className={styles.carouselImage}
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-label={item.alt || `Slide ${index + 1}`}
                  />
                ) : (
                  <img
                    src={item.img}
                    alt={item.alt || `Slide ${index + 1}`}
                    className={styles.carouselImage}
                  />
                )}
                
                <div className={styles.imageMetadata}>
                  {item.modality && (
                    <span className={styles.modalityBadge}>
                      {item.modality}
                    </span>
                  )}
                  
                  <div className={styles.metaContent}>
                    {item.date && (
                      <time className={styles.imageDate}>
                        {new Date(item.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    )}
                    
                    {item.tags?.length > 0 && (
                      <div className={styles.tagContainer}>
                        {item.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className={styles.tagPill}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
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