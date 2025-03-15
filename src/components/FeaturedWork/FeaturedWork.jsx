import React, { useRef, useEffect, useState } from 'react';
import workItems from './workItems';
import PrimaryButton from '../Buttons/PrimaryButton';
import AnimatedSection from '../AnimatedSection/AnimatedSection';
import styles from './FeaturedWork.module.css';

const FeaturedWork = () => {
  const containerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const ticking = useRef(false);
  const lastScrollPos = useRef(0);

  // Handle Scroll-Based Scale Animation
  const handleScroll = () => {
    if (!containerRef.current || !isDesktop) return;

    const section = containerRef.current;
    const sectionPosition = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    let progress;
    if (sectionPosition.top >= 0 && sectionPosition.bottom <= windowHeight) {
      progress = 1;
    } else if (sectionPosition.top < 0) {
      progress = Math.max(0.9, 1 + sectionPosition.top / windowHeight);
    } else {
      progress = Math.max(
        0.9,
        1 - (sectionPosition.bottom - windowHeight) / windowHeight
      );
    }

    section.style.transform = `scale(${progress})`;
  };

  const onScroll = () => {
    lastScrollPos.current = window.scrollY;
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        handleScroll(lastScrollPos.current);
        ticking.current = false;
      });
      ticking.current = true;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const isNowDesktop = window.innerWidth >= 768;
      setIsDesktop(isNowDesktop);
      if (containerRef.current) {
        containerRef.current.style.transform = isNowDesktop ? '' : 'scale(1)';
      }
    };

    window.addEventListener('resize', handleResize);
    if (isDesktop) {
      window.addEventListener('scroll', onScroll);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', onScroll);
      if (containerRef.current) {
        containerRef.current.style.transform = 'scale(1)';
      }
    };
  }, [isDesktop]);

  return (
    <section id="featured-work" className={styles.featuredWork}>
      <div className={styles.parallax}></div>
      <div className={styles.wrapper}>
        <AnimatedSection direction="zoom-in">
          <h2>Featured Work</h2>
        </AnimatedSection>
        <div ref={containerRef} className={styles.container}>
          <AnimatedSection direction="up">
            <div className={styles.workGrid}>
              {workItems.map((item, index) => (
                <AnimatedSection key={index} direction={index % 2 === 0 ? 'left' : 'right'} delay={index * 0.2}>
                  <div className={styles.workItem}>
                    <img src={item.image} alt={item.title} loading="lazy" />
                    <h3>{item.title}</h3>
                    <p>{item.quote}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="fade" delay={0.4}>
            <PrimaryButton
              to="/portfolio"
              label="View Full Portfolio"
              ariaLabel="View Full Portfolio"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
