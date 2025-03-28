import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './MainLayout.module.css';

const MainLayout = ({ children, isHomePage, currentPage, activeSection }) => {
  const location = useLocation();
  const mainRef = useRef();

  // Enhanced scroll handler
  useEffect(() => {
    const scrollToTop = () => {
      try {
        // Try scrolling the main content area first
        if (mainRef.current) {
          mainRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
        // Fallback to window scroll
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (e) {
        console.warn("Smooth scroll not supported, using instant scroll");
        window.scrollTo(0, 0);
      }
    };

    // Delay slightly to ensure DOM is updated
    const timer = setTimeout(scrollToTop, 50);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className={styles.layoutContainer}>
      <Header 
        isHomePage={isHomePage} 
        currentPage={currentPage} 
        activeSection={activeSection} 
      />
      <main ref={mainRef}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;