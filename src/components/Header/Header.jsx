import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

const Header = ({ isHomePage = false, currentPage = '', activeSection = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Navigation links for Home page and Other pages
  const homeNavLinks = [
    { name: 'Home', path: '#hero' },
    { name: 'About Me', path: '#introduction' },
    { name: 'Portfolio', path: '#featured-work' },
    { name: 'Skills', path: '#services' },
    { name: 'Achievements', path: '#achievements' },
    { name: 'Collaborations', path: '#clients' },
    { name: 'Contact', path: '/contact' }
  ];

  const pageNavLinks = [
    { name: 'Home', path: '/' },
    { name: 'Resume', path: '/resume' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
  ];

  // Pick relevant links & filter out current page
  const navLinks = (isHomePage ? homeNavLinks : pageNavLinks).filter(
    link => !currentPage.toLowerCase().includes(link.name.toLowerCase())
  );

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo Component */}
        <Logo />

        {/* Mobile Menu Button */}
        <button
          className={`${styles.menuButton} ${isMenuOpen ? styles.open : ''}`}
          onClick={() => setIsMenuOpen(prev => !prev)}
          aria-label="Toggle navigation menu"
        >
          <span className={styles.menuBar}></span>
          <span className={styles.menuBar}></span>
          <span className={styles.menuBar}></span>
        </button>

        {/* Navigation Component */}
        <Navigation 
          links={navLinks}
          isMenuOpen={isMenuOpen}
          closeMenu={() => setIsMenuOpen(false)}
          isHomePage={isHomePage} // Pass isHomePage to handle smooth scroll links
          activeSection={activeSection} // ✅ Pass activeSection for underlining current section
        />
      </div>
    </header>
  );
};

export default Header;
