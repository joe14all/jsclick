import React, { useEffect, useRef, useState } from 'react';
import styles from './CaseStudyCarousel.module.css';

const CaseStudyCarousel = ({ images, activeSlide, setActiveSlide }) => {
  const intervalRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null); 
  const [isPlaying, setIsPlaying] = useState(true);
const [isHovered, setIsHovered] = useState(false); 


const startAutoSlide = () => {
  if (!isPlaying) return;
  clearInterval(intervalRef.current);
  intervalRef.current = setInterval(() => {
    setActiveSlide(prev => (prev + 1) % images.length);
  }, 5000);
};

const pauseAutoSlide = () => {
  clearInterval(intervalRef.current);
};


  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, [images.length]);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + images.length) % images.length);
    startAutoSlide();
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % images.length);
    startAutoSlide();
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
    startAutoSlide();
  };

  return (
<div 
  className={styles.carouselContainer}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => {
    setIsHovered(false);
    if (isPlaying) startAutoSlide(); // Restart if playing
  }}
>
      {/* Hover Preview Caption */}
      {hoveredIndex !== null && (
        <div className={styles.hoverPreview}>
          {images[hoveredIndex]?.caption}
        </div>
      )}

      {/* Dots on top */}
      <div className={styles.dots}>
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`${styles.dot} ${idx === activeSlide ? styles.active : ''}`}
            onClick={() => goToSlide(idx)}
            onMouseEnter={() => setHoveredIndex(idx)} // Show preview caption
            onMouseLeave={() => setHoveredIndex(null)} // Hide preview caption
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
        {isHovered && (
  <button
    className={`${styles.playPauseButton}`}
    onClick={() => {
      setIsPlaying(prev => {
        const next = !prev;
        if (next) startAutoSlide();
        else pauseAutoSlide();
        return next;
      });
    }}
    aria-label={isPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
  >
    {isPlaying ? '❚❚' : '▶'}
  </button>
)}
          <div
            className={styles.carouselInner}
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {images.map((item, index) => (
              <div 
                key={index} 
                className={styles.carouselItem}
                onMouseEnter={pauseAutoSlide}
                onMouseLeave={startAutoSlide} // Restart immediately
              >
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
