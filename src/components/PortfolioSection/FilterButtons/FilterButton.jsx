// components/Portfolio/FilterButtons/FilterButton.jsx
import styles from './FilterButton.module.css';
const categories = [
  'all', 'restorative', 'implant', 'cosmetic', 
  'endodontics', 'prosthodontics', 'surgery'
];

const FilterButtons = ({ activeFilter, setActiveFilter }) => (
  <div className={styles.filterOptions}>
    {categories.map(category => (
      <button
        key={category}
        className={`${styles.filterBtn} ${
          activeFilter === category ? styles.active : ''
        }`}
        onClick={() => setActiveFilter(category)}
      >
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </button>
    ))}
  </div>
);

export default FilterButtons;