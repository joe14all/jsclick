import { useState } from 'react';
import styles from './CourseItem.module.css';
import { ExternalLink } from 'lucide-react';

const CourseItem = ({ course }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`${styles.courseItem} ${isExpanded ? styles.expanded : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
      aria-label={`Course: ${course.title}`}
    >
      <div className={styles.courseContent}>
        {/* Left Side */}
        <div className={styles.imageContainer}>
            <img src={course.image.src} alt={course.image.alt} loading="lazy" />
        
        </div>

        {/* Right Side */}
        <div style={{ flex: 1 }}>
          <h4 className={styles.courseTitle}>{course.title}</h4>
          <p className={styles.courseInstructor}><strong>Instructor:</strong> {course.instructor}</p>
          <p className={styles.courseDuration}><strong>Duration:</strong> {course.duration}</p>

          {isExpanded && (
            <>
              <p><strong>Type:</strong> {course.type}</p>
              <a
                href={course.providerLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.providerLink}
              >
                Visit Provider <ExternalLink size={16} />
              </a>
              <h5>Key Topics:</h5>
              <ul className={styles.courseDetails}>
                {course.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
