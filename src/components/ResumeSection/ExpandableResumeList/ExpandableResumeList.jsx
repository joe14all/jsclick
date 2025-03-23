// components/ResumeSection/ExpandableResumeList/ExpandableResumeList.jsx
import { CheckCircle } from 'lucide-react'; 
import CourseItem from '../CourseItem/CourseItem';
import styles from './ExpandableResumeList.module.css';

const ExpandableResumeList = ({ title, items }) => {
 return(
  <li className={styles.resumeListSection}>
    <h4 className={styles.sectionTitle}>{title}</h4>
    <ul className={styles.listItems}>
      {items.map((course, index) => (
        <li key={index} className={styles.listItem}>
          <CheckCircle size={18} className={styles.icon} /> 
          <CourseItem key={index} course={course} />
        </li>
      ))}
    </ul>
  </li>
);
      }
export default ExpandableResumeList;
