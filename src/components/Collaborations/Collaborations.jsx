// Collaborations.jsx
import React from 'react';
import styles from './Collaborations.module.css';
import CollaborationLogo from '../CollaborationLogo/CollaborationLogo';
import UCLAImage from '../../assets/images/UCLA_School_of_Dentistry_logo-1200px.png';
import AspenDentalImage from '../../assets/images/AspenDental.png';
import SCFHCImage from '../../assets/images/SCFHC-LOGO.png';
import BarsoumImage from '../../assets/images/Barsoum_logo.webp';
import ADCImage from '../../assets/images/ADC_logo.png';

const Collaborations = () => {
  const collaborations = [
    {
      url: "https://dentistry.ucla.edu/",
      image: UCLAImage,
      alt: "UCLA"
    },
    {
      url: "https://www.aspendental.com/",
      image: AspenDentalImage,
      alt: "AspenDental"
    },
    {
      url: "https://scfhc.org/",
      image: SCFHCImage,
      alt: "South Central Family Health Center"
    },
    {
      url: "https://www.barsoum.com/",
      image: BarsoumImage,
      alt: "Barsoum Dental Clinic"
    },
    {
      url: "https://www.adcdentalclinics.com/",
      image: ADCImage,
      alt: "Alpha Dental Clinics"
    }
  ];

  return (
    <section id="clients" className={styles.collaborationsSection}>
    
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Collaborations</h2>
          <div className={styles.logosScroller}>
            <div className={styles.logosTrack}>
                {collaborations.map((collab, index) => (
                <CollaborationLogo
                    key={index}
                    url={collab.url}
                    image={collab.image}
                    alt={collab.alt}
                />
                ))}
            </div>
            </div>

            <div className={styles.logosGridMobile}>
            {collaborations.map((collab, index) => (
                <CollaborationLogo
                key={index}
                url={collab.url}
                image={collab.image}
                alt={collab.alt}
                />
            ))}
            </div>


          <p className={styles.description}>
            I've had the pleasure of working with esteemed dental practices and institutions, 
            providing innovative dental solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Collaborations;