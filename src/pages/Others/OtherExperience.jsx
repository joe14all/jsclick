import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MainLayout from '../../components/Layout/MainLayout';
import businessSubsections from './businessSubsections';
import computerScienceSubsections from './computerScienceSubsections';
import mediaSubsections from './mediaSubsection';
import SectionContainer from '../../components/OtherSection/SectionContainer';
import CertificateTableCTA from '../../components/CertificateTableCTA/CertificateTableCTA';
import Modal from '../../components/Modal/Modal';
import styles from './Experience.module.css';

const OtherExperience = () => {
  const [searchParams] = useSearchParams();
  const [activeSection, setActiveSection] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const activeParamSection = searchParams.get('section');

  

  useEffect(() => {
    if (activeParamSection) {
      const el = document.getElementById(activeParamSection);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [activeParamSection]);

  const handleOpenCertificates = (section) => {
    setActiveSection(section);
    console.log(" Active section:", section)
  };

  return (
    <MainLayout isHomePage={false} currentPage="Other Experience">
      <div className={styles.experiencePage}>
        {/* Business Section */}
        <SectionContainer
          title="Business Expertise"
          subsections={businessSubsections}
          ctas={[
            {
              label: 'View Business Certificates',
              ariaLabel: 'View business credentials',
              onClick: () => handleOpenCertificates('Business')
            },
          ]}
        />

        {/* Computer Engineering Section */}
        <SectionContainer
          title="Computer Engineering Proficiencies"
          subsections={computerScienceSubsections}
          theme="dark"
          ctas={[
            {
              label: 'Computer Engineering Certifications',
              ariaLabel: 'View technology credentials',
              onClick: () => handleOpenCertificates('Computer Engineering')
            },
          ]}
        />

        {/* Media Section */}
        <SectionContainer
          title="Media Production"
          subsections={mediaSubsections}
          ctas={[
            {
              label: 'Media Credentials',
              ariaLabel: 'View media certifications',
              onClick: () => handleOpenCertificates('Media')
            },
          ]}
        />
      </div>

      {/* Certificates List Modal */}
      <Modal
        open={!!activeSection}
        onClose={() => setActiveSection(null)}
        ariaLabel={`${activeSection} Certificates`}
      >
    
        {activeSection && (

            <CertificateTableCTA
            title={activeSection}
            certificates={
                activeSection === 'Business' 
                ? businessSubsections.flatMap(sub => 
                    sub.certificates ? sub.certificates.map(cert => ({ 
                        ...cert, 
                        category: sub.title 
                    })) : []
                    ) 
                : activeSection === 'Computer Engineering' 
                ? computerScienceSubsections.flatMap(sub => 
                    sub.certificates ? sub.certificates.map(cert => ({
                        ...cert,
                        category: sub.title
                    })) : []
                    )
                : mediaSubsections.flatMap(sub => 
                    sub.certificates ? sub.certificates.map(cert => ({
                        ...cert,
                        category: sub.title
                    })) : []
                    )
            }
            onCertClick={setSelectedCert}
            />
        )}
      </Modal>

      {/* Certificate Detail Modal */}
      <Modal
        open={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        ariaLabel="Certificate Detail"
      >
        {selectedCert && (
          <div className={styles.modalContent}>
            <img 
              src={selectedCert.thumbnail} 
              alt={selectedCert.title} 
              className={styles.modalImage} 
            />
            <a
              href={selectedCert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.modalLink}
            >
              Open PDF in New Tab
            </a>
          </div>
        )}
      </Modal>
    </MainLayout>
  );
};

export default OtherExperience;