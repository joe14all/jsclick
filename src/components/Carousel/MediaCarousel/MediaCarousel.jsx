import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import styles from './MediaCarousel.module.css';

const MediaCarousel = ({ mediaItems, autoPlay = true, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = mediaItems.length;
  const timerRef = useRef(null);

  // Auto-play
  useEffect(() => {
    if (autoPlay) startAutoPlay();
    return () => stopAutoPlay();
  }, [currentIndex, autoPlay]);

  const startAutoPlay = () => {
    stopAutoPlay();
    timerRef.current = setInterval(() => {
      handleNext();
    }, interval);
  };

  const stopAutoPlay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % totalItems);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  const handleThumbnailClick = (index) => setCurrentIndex(index);

  // Swipe Handling
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
  });

  const currentItem = mediaItems[currentIndex];

  return (
    <div
      className={styles.carouselContainer}
      {...swipeHandlers}
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      {/* Main Slide */}
      <div className={styles.carouselWrapper}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className={styles.mediaWithCaption}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <div className={styles.mainMedia}>
              {currentItem.type === 'image' ? (
                <img src={currentItem.src} alt={currentItem.title || 'Media'} />
              ) : (
                <video src={currentItem.src} autoPlay muted loop playsInline />
              )}
            </div>
            {currentItem.title && <div className={styles.caption}>{currentItem.title}</div>}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <button className={styles.navButton} onClick={handlePrev}>
          &#10094;
        </button>
        <button className={styles.navButton} onClick={handleNext}>
          &#10095;
        </button>
      </div>

      {/* Progress bar */}
      <div className={styles.progressBar}>
        <motion.div
          className={styles.progressFill}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: interval / 1000, ease: 'linear' }}
          key={currentIndex}
        />
      </div>

      {/* Thumbnails */}
      <div className={styles.thumbnails}>
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className={`${styles.thumbnail} ${index === currentIndex ? styles.activeThumb : ''}`}
            onClick={() => handleThumbnailClick(index)}
          >
            {item.type === 'image' ? (
              <img src={item.src} alt={item.title || 'Thumbnail'} />
            ) : (
              <video src={item.src} muted playsInline />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaCarousel;
