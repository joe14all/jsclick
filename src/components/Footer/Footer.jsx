import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

import LinkedInIcon from '../../assets/images/icon-logo-Linkedin.png';
import InstagramIcon from '../../assets/images/icon-logo-instagram.png';
import FacebookIcon from '../../assets/images/icon-logo-facebook.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerLinks}>
        <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/other-experience">Other Experience</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className={styles.socialMedia}>
          <a 
            href="https://www.linkedin.com/in/joseph-shenouda-93038b172?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BQR%2Fe6T1oRT6V%2F2z4Spw5Aw%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={LinkedInIcon} alt="LinkedIn" />
          </a>
          <a 
            href="https://www.instagram.com/drjosephshenouda/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={InstagramIcon} alt="Instagram" />
          </a>
          <a 
            href="https://www.facebook.com/drjosephshenouda?mibextid=LQQJ4d" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={FacebookIcon} alt="Facebook" />
          </a>
        </div>
        <div className={styles.contactInfo}>
          <p>Email: <a href="mailto:drjosephshenouda@gmail.com">drjosephshenouda@gmail.com</a></p>
        </div>
        <p>&copy; 2024 Dr. Joseph Shenouda. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
