// CollaborationLogo.jsx
import React from 'react';
import styles from './CollaborationLogo.module.css';

const CollaborationLogo = ({ url, image, alt }) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.logoLink}
    >
      <img 
        src={image} 
        alt={alt} 
        className={styles.logoImage}
        loading="lazy"
      />
    </a>
  );
};

export default CollaborationLogo;