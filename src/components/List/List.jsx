// components/List/List.js
import styles from './List.module.css';

export const List = ({ items, bulletColor = "#1a73e8" }) => (
  <ul className={styles.list}>
    {items.map((item, i) => (
      <li key={i} style={{ '--bullet-color': bulletColor }}>
        <span className={styles.bullet}>•</span>
        {item}
      </li>
    ))}
  </ul>
);