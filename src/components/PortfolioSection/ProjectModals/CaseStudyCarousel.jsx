import React, { useEffect, useRef, useState } from 'react';
import styles from './CaseStudyCarousel.module.css';

const CaseStudyCarousel = ({ images, activeSlide, setActiveSlide }) => {
  const intervalRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null); 
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false); 

  const startAutoSlide = () => {
    console.log('[AutoSlide] Starting autoplay...');
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      console.log('[AutoSlide] Advancing slide...');
      setActiveSlide(prev => {
        const nextSlide = (prev + 1) % images.length;
        console.log(`[AutoSlide] Slide changed from ${prev} to ${nextSlide}`);
        return nextSlide;
      });
    }, 5000);
  };

  const pauseAutoSlide = () => {
    console.log('[AutoSlide] Pausing autoplay...');
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    console.log('[useEffect] Initializing autoplay on mount or images length change...');
    startAutoSlide();
    return () => {
      console.log('[useEffect] Cleaning up interval on unmount...');
      clearInterval(intervalRef.current);
    };
  }, [images.length]);

  const handlePrev = () => {
    console.log('[Manual] Previous button clicked');
    setActiveSlide((prev) => {
      const nextSlide = (prev - 1 + images.length) % images.length;
      console.log(`[Manual] Slide changed from ${prev} to ${nextSlide}`);
      return nextSlide;
    });
   
  };

  const handleNext = () => {
    console.log('[Manual] Next button clicked');
    setActiveSlide((prev) => {
      const nextSlide = (prev + 1) % images.length;
      console.log(`[Manual] Slide changed from ${prev} to ${nextSlide}`);
      return nextSlide;
    });
    
  };

  const goToSlide = (index) => {
    console.log(`[Manual] Dot clicked - going to slide ${index}`);
    setActiveSlide(index);

  };

  return (
    <div 
      className={styles.carouselContainer}
      onMouseEnter={() => {
        console.log('[Hover] Mouse entered carousel');
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        console.log('[Hover] Mouse left carousel');
        setIsHovered(false);
      }}
    >
      <button
        className={`${styles.compactPlayPause}`}
        onClick={() => {
          setIsPlaying(prev => {
            const next = !prev;
            console.log(`[Toggle] Play/Pause button clicked - now ${next ? 'Playing' : 'Paused'}`);
            if (next) startAutoSlide();
            else pauseAutoSlide();
            return next;
          });
        }}
        aria-label={isPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
      >
        {isPlaying ? '❚❚' : '▶'}
      </button>

      {hoveredIndex !== null && (
        <div className={styles.hoverPreview}>
          {images[hoveredIndex]?.caption}
        </div>
      )}

      <div className={styles.dots}>
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`${styles.dot} ${idx === activeSlide ? styles.active : ''}`}
            onClick={() => goToSlide(idx)}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

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
                  console.log(`[Toggle] (Hovered) Play/Pause clicked - now ${next ? 'Playing' : 'Paused'}`);
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
                onMouseEnter={() => {
                  console.log(`[Slide] Mouse entered slide ${index}`);
                  pauseAutoSlide();
                }}
                onMouseLeave={() => {
                  console.log(`[Slide] Mouse left slide ${index}`);
                  if (isPlaying) startAutoSlide();
                }}
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
