import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = ({ links, isMenuOpen, closeMenu, activeSection, isHomePage }) => {

  const renderLink = (link) => {
    // Determine if the link is active
    const isActive = isHomePage
      ? activeSection === link.path.replace('#', '') 
      : window.location.pathname === link.path; 

    const linkClassName = `${styles.navLink} ${isActive ? styles.active : ''}`;

    if (link.path.startsWith('#')) {
      // Anchor links for homepage sections
      return (
        <a
          href={link.path}
          className={linkClassName}
          onClick={closeMenu}
        >
          {link.name}
        </a>
      );
    }

    // React Router links for internal pages
    return (
      <Link
        to={link.path}
        className={linkClassName}
        onClick={closeMenu}
      >
        {link.name}
      </Link>
    );
    
  };

  return (
    <nav className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
      <ul>
        {links.map((link, index) => (
          <li key={index} className={styles.navItem}>
            {renderLink(link)}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
