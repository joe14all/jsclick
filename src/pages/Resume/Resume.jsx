import React from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import resumeData from '../../components/ResumeSection/resumeData';
import ResumeList from '../../components/ResumeSection/ResumeList/ResumeList';
import CourseItem from '../../components/ResumeSection/CourseItem/CourseItem';
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
                <h4 className={styles.sectionTitle}>Position</h4>
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

              <ResumeList title="Certifications" items={resumeData.certifications} />

              <ResumeList
                title="Key Achievements"
                items={[
                  "Comprehensive Patient Care Award",
                  "Excellence in Restorative Dentistry Award",
                  "Excellence in Clinical Care Award",
                ]}
              />
                 <ExpandableResumeList
              title="Courses"
              items={resumeData.courses}/>
            </ul>


            {/* Download and LinkedIn */}
            <DownloadCV />
            <LinkedInIntegration />
          </div>
        </section>

        {/* Call to Action */}
        <div className={styles.CTASection}>
          <PrimaryButton
            to="/contact"
            label="Let's connect"
            ariaLabel="go to contact"
          />
          <p>Looking for a general Dentist? Let's work together.</p>
        </div>
      </AnimatedSection>
    </MainLayout>
  );
};

export default Resume;
