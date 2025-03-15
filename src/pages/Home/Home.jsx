import React from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import Hero from '../../components/Hero/Hero';
import Introduction from '../../components/Introduction/Introduction';
import FeaturedWork from '../../components/FeaturedWork/FeaturedWork';
import ServicesProvided from '../../components/ServicesProvided/ServicesProvided';
import Achievements from '../../components/Achievements/Achievements';
import Collaborations from '../../components/Collaborations/Collaborations';
import ContactCTA from '../../components/ContactCTA/ContactCTA';
import useSectionObserver from '../../hooks/useSectionObserver';
import styles from "./Home.module.css";

const Home = () => {
  const activeSection = useSectionObserver([
    'hero',
    'introduction',
    'featured-work',
    'services',
    'achievements',
    'clients'
  ]);

  return (
    <MainLayout isHomePage={true} currentPage="Home" activeSection={activeSection}>
      {/* Parallax Background */}
      <div className={styles.parallaxBackground}></div>
      <div className={styles.parallaxOverlay}></div> {/* Optional for darkness */}

      {/* Sections */}
      <Hero />
      <Introduction />
      <FeaturedWork />
      <ServicesProvided />
      <Achievements />
      <Collaborations />
      <ContactCTA />
    </MainLayout>
  );
};

export default Home;
