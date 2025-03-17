// components/ResumeSection/LinkedInIntegration.jsx
import styles from './LinkedInIntegration.module.css';
import PrimaryButton from '../Buttons/PrimaryButton';


const LinkedInIntegration = () => (
  <div className={styles.linkedinIntegration}>
    <h3 className={styles.title}>Connect on LinkedIn</h3>
    <p className={styles.description}>Stay connected with me for more professional updates and collaborations.</p>
    
    <PrimaryButton
      to="https://www.linkedin.com/in/joseph-shenouda"
      label=" View My LinkedIn Profile"
      ariaLabel="View my LinkedIn profile"
      external={true} 
    />
  </div>
);

export default LinkedInIntegration;
