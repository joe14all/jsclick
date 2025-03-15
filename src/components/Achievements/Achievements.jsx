import React, { useState, useEffect, useRef } from 'react';

import AchievementItem from './AchievementItem/AchievementItem';
import achievementsData from './achievementsData';
import PrimaryButton from '../Buttons/PrimaryButton';
import styles from './Achievements.module.css';
import AnimatedSection from '../AnimatedSection/AnimatedSection'; 

const Achievements = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  const ballBottomRight = useRef(null);
  const ballTopLeft = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (ballBottomRight.current && ballTopLeft.current && isDesktop) {
        ballBottomRight.current.style.transform = `translate(${scrollPosition * 0.4}px, ${scrollPosition * 0.2}px)`;
        ballTopLeft.current.style.transform = `translate(${-scrollPosition * 0.3}px, ${-scrollPosition * 0.1}px)`;
      }
    };

    const mediaQuery = window.matchMedia('(min-width: 768px)');
    setIsDesktop(mediaQuery.matches);
    
    const resizeHandler = () => setIsDesktop(mediaQuery.matches);
    mediaQuery.addListener(resizeHandler);

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      mediaQuery.removeListener(resizeHandler);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDesktop]);

  return (
    <AnimatedSection direction="fade" delay={0.15}> {/* OUTER WRAPPER FOR SECTION */}
      <section id="achievements" className={styles.achievementsSection}>
        <div ref={ballBottomRight} className={`${styles.movingBall} ${styles.ballBottomRight}`}></div>
        <div ref={ballTopLeft} className={`${styles.movingBall} ${styles.ballTopLeft}`}></div>

        <div className={styles.wrapper}>
          <div className={styles.container}>
            <h2>Professional Achievements</h2>

            <div className={styles.achievementsGrid}>
              {achievementsData.map((achievement, index) => (
                <AchievementItem
                  key={index}
                  image={achievement.image}
                  title={achievement.title}
                  year={achievement.year}
                  description={achievement.description}
                  backImage={achievement.backImage}
                />
              ))}
            </div>
            <div className={styles.buttonWrapper}>
              <PrimaryButton
                to="/resume"
                label="View My Resume"
                ariaLabel="View My Resume"
              />
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Achievements;
