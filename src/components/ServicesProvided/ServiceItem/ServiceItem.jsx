import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react'; // You can replace this with any other icon
import styles from './ServiceItem.module.css';

const ServiceItem = ({ icon, title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => setIsOpen((prev) => !prev);

  return (
    <div
      className={`${styles.serviceItem} ${isOpen ? styles.open : ''}`}
      style={{ backgroundImage: `url(${icon})` }}
      onClick={toggleCard}
    >
      <div className={styles.overlay}>
        <h3 className={styles.serviceTitle}>{title}</h3>
      </div>
      <div className={`${styles.contentWrapper} ${isOpen ? styles.showContent : ''}`}>
        <ul className={styles.serviceList}>
          {items.map((item, index) => (
            <li key={index} className={styles.serviceListItem}>
              <CheckCircle className={styles.listIcon} size={18} strokeWidth={2} /> {/* Icon added */}
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceItem;
