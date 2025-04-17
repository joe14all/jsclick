import React from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import Hero from '../../components/Hero/Hero';
import Introduction from '../../components/Introduction/Introduction';
import FeaturedWork from '../../components/FeaturedWork/FeaturedWork';
import ServicesProvided from '../../components/ServicesProvided/ServicesProvided';
import Achievements from '../../components/Achievements/Achievements';
import Testimonials from '../../components/Testimonials/Testimonials';
import Collaborations from '../../components/Collaborations/Collaborations';
import ContactCTA from '../../components/ContactCTA/ContactCTA';
import useSectionObserver from '../../hooks/useSectionObserver';
import styles from "./Home.module.css";

const Home = () => {

const sectionIds = [
  'hero', 
  'introduction', 
  'featured-work', 
  'services', 
  'achievements', 
  'testimonials', 
  'clients'
];

const activeSection = useSectionObserver(sectionIds);
  return (
    <MainLayout isHomePage={true} currentPage="Home" activeSection={activeSection}>
      {/* Parallax Background */}
      <div className={styles.parallaxBackground}></div>
      <div className={styles.parallaxOverlay}></div> 

      {/* Sections */}
      <Hero />
      <Introduction />
      <FeaturedWork />
      <ServicesProvided />
      <Achievements />
      <Testimonials/>
      <Collaborations />
      <ContactCTA />
    </MainLayout>
  );
};

export default Home;
