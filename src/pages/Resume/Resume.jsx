import React, { useState } from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import resumeData from '../../components/ResumeSection/resumeData';
import ResumeList from '../../components/ResumeSection/ResumeList/ResumeList';
import CourseItem from '../../components/ResumeSection/CourseItem/CourseItem';
import DownloadCV from '../../components/ResumeSection/DownloadCV';
import LinkedInIntegration from '../../components/ResumeSection/LinkedInIntegration';
import styles from './Resume.module.css';

const Resume = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  return (
    <MainLayout isHomePage={false} currentPage="Resume">
      <AnimatedSection direction="fade" delay={0.1}>
        <section className={styles.resumeCvSection} id="resume-cv">
          <div className={styles.container}>
            {/* Header */}
            <div className={styles.interactiveResume}>
              <h3>Resume</h3>
              <p>Explore my professional journey, key experiences, and accomplishments:</p>
            </div>

            {/* Main List */}
            <ul className={styles.resumeList}>
              <li><strong>Position:</strong> {resumeData.position}</li>

              <ResumeList title="Education" items={resumeData.education} />

              <li>
                <strong>Experience:</strong> Over 10 years in Restorative Dentistry, Endodontics, Clear Aligners, Surgery, Implantology, and Cosmetic Dentistry
              </li>

              <ResumeList title="Certifications" items={resumeData.certifications} />

              <ResumeList
                title="Key Achievements"
                items={[
                  "Comprehensive Patient Care Award",
                  "Excellence in Restorative Dentistry Award",
                  "Excellence in Clinical Care Award",
                ]}
              />
            </ul>

            {/* Courses Section */}
            {/* <div className={styles.coursesSection}>
              <h4>Courses</h4>
              <div className={styles.coursesList}>
                {resumeData.courses.map((course, index) => (
                  <CourseItem key={index} course={course} />
                ))}
              </div>
            </div> */}

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
