// AchievementItem.jsx
import React, { useState } from 'react';
import styles from './AchievementItem.module.css';

const AchievementItem = ({ image, title, year, description, backImage }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`${styles.achievementItem} ${isFlipped ? styles.flipped : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={styles.front}>
        <img src={image} alt={title} className={styles.achievementImage} />
        <h3>{title}</h3>
        <p>{year}</p>
      </div>
      
      <div className={styles.back}>
        <div className={styles.backImageContainer}>
        <img src={backImage} alt={title} className={styles.backImage} />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AchievementItem;