import React from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection';
import resumeData from '../../components/ResumeSection/resumeData';
import ResumeList from '../../components/ResumeSection/ResumeList/ResumeList';
import DownloadCV from '../../components/ResumeSection/DownloadCV';
import LinkedInIntegration from '../../components/ResumeSection/LinkedInIntegration';
import { CheckCircle } from 'lucide-react'; 

import styles from './Resume.module.css';
import ExpandableResumeList from '../../components/ResumeSection/ExpandableResumeList/ExpandableResumeList';

const Resume = () => {


  return (
    <MainLayout isHomePage={false} currentPage="Resume">
      <AnimatedSection direction="fade" delay={0.1}>
        <section className={styles.resumeCvSection} id="resume-cv">
          <div className={styles.container}>
            {/* Header */}
            <div className={styles.interactiveResume}>
              <h3>Resume</h3>
              <p>Explore my professional journey, key experiences, and accomplishments <br/>
              Over 10 years in Restorative Dentistry, Endodontics, Clear Aligners, Surgery, Implantology, and Cosmetic Dentistry</p>
            </div>

            {/* Main List */}
            <ul className={styles.resumeList}>
              <li className={styles.resumeListSection}>
                <h4 className={styles.sectionTitle}>Current Position</h4>
                <ul className={styles.listItems}>
                  {resumeData.position && (
                    <li className={styles.listItem}>
                      <CheckCircle size={18} className={styles.icon} />
                      <span>{resumeData.position}</span>
                    </li>
                  )}
                </ul>
              </li>

              <ResumeList title="Education" items={resumeData.education} />

              <ResumeList title="Awards" items={resumeData.awards} />

              <ResumeList title="Certifications" items={resumeData.certifications} />

              <ExpandableResumeList
                title="Courses"
                items={resumeData.courses}
              />
            </ul>

            {/* Download and LinkedIn */}
            <DownloadCV />
            <LinkedInIntegration />
          </div>
        </section>

      </AnimatedSection>
    </MainLayout>
  );
};

export default Resume;
