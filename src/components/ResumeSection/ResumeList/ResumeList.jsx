// components/ResumeSection/ResumeList/ResumeList.jsx
import { CheckCircle } from 'lucide-react'; 
import styles from './ResumeList.module.css';

const ResumeList = ({ title, items }) => (
  <li className={styles.resumeListSection}>
    <h4 className={styles.sectionTitle}>{title}</h4>
    <ul className={styles.listItems}>
      {items.map((item, index) => (
        <li key={index} className={styles.listItem}>
          <CheckCircle size={18} className={styles.icon} /> 
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </li>
);

export default ResumeList;
