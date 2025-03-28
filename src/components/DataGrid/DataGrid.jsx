// components/DataGrid/DataGrid.js
import styles from './DataGrid.module.css';

export const GridContainer = ({ children }) => (
  <div className={styles.grid}>{children}</div>
);

export const GridItem = ({ label, value, children }) => (
  <div className={styles.gridItem}>
    {label && <label>{label}</label>}
    {value && <span>{value}</span>}
    {children}
  </div>
);