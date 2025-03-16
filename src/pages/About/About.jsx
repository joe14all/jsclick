import React from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import BiographySection from './BiographySection'; // ✅ New engaging component
import ProfessionalPhoto from '../../assets/images/joseph.jpg';
import ProfessionalPhotoSmall from '../../assets/images/joseph-small.jpg';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection';
import styles from './About.module.css';
import PhilosophySection from './PhilosophySection';

const About = () => {

  
  return (
    <MainLayout isHomePage={false} currentPage="About">
      
      {/* Professional Photo */}
      <aside className={styles.professionalPhoto}>
        <img
          src={ProfessionalPhoto}
          srcSet={`${ProfessionalPhotoSmall} 2x`}
          alt="Professional"
        />
      </aside>

      <div className={styles.aboutMePage}>

        {/* Biography Section */}
        <AnimatedSection id="biography" className={styles.section}>
          <div className={styles.circleBg}></div>
          <div className={styles.container}>
            {/* Mobile Header */}
            <div className={styles.mobileHeader}>
              <h2>Biography</h2>
              <img src={ProfessionalPhotoSmall} alt="Mobile Professional" />
            </div>

            {/* Enhanced Storytelling Component */}
            <BiographySection /> 
            <PhilosophySection/>
          </div>
        </AnimatedSection>

       

        {/* Portfolio Section */}
     <div className={styles.CTASsection}>
          <div className={styles.container}>
            <h3>Check my work</h3>
            <PrimaryButton 
              to="/portfolio"
              label="Go to portfolio"
              ariaLabel="Go to portfolio"
            />
      
        </div>

        {/* Resume Section */}
  
          <div className={styles.container}>
            <h3>Check my Resume</h3>
            <PrimaryButton 
              to="/resume"
              label="Go to resume"
              ariaLabel="Go to resume"
            />
          </div>
          </div>
  

      </div>
    </MainLayout>
  );
};

export default About;
