// components/ResumeSection/LinkedInIntegration.jsx
import styles from './LinkedInIntegration.module.css';
import PrimaryButton from '../Buttons/PrimaryButton';


const LinkedInIntegration = () => (
  <div className={styles.linkedinIntegration}>
    <h3 className={styles.title}>Connect on LinkedIn</h3>
    <p className={styles.description}>Stay connected with me for more professional updates and collaborations.</p>
    
    <PrimaryButton
      to="https://www.linkedin.com/in/joseph-shenouda-93038b172?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BQR%2Fe6T1oRT6V%2F2z4Spw5Aw%3D%3D"
      label=" View My LinkedIn Profile"
      ariaLabel="View my LinkedIn profile"
      external={true} 
    />
  </div>
);

export default LinkedInIntegration;
