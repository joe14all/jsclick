import React from 'react';
import { Link } from 'react-router-dom';
import JSLogo from "../../assets/images/js-logo.png";
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to="/">
        <img 
          src={JSLogo} 
          alt="Joseph Shenouda Logo" 
          className={styles.logoImage}
        />
        <span className={styles.logoName}>Joseph Shenouda</span>
        <span className={styles.separator}>|</span>
        <span className={styles.credentials}>BDS DDS</span>
      </Link>
    </div>
  );
};

export default Logo;
