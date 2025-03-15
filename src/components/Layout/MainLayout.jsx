import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import styles from './MainLayout.module.css';

const MainLayout = ({ children, isHomePage, currentPage, activeSection }) => {
  return (
    <div className={styles.layoutContainer}>
      <Header 
        isHomePage={isHomePage} 
        currentPage={currentPage} 
        activeSection={activeSection} // ✅ Pass activeSection here
      />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
