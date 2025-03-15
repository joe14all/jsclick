import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PrimaryButton.module.css';

/**
 * Reusable Primary Button
 * @param {string} to - If starts with #, renders as anchor link. If provided, renders as a Link, else as a button
 * @param {string} label - Text inside the button
 * @param {function} onClick - Optional click handler (if used as button)
 * @param {string} ariaLabel - Optional aria-label for accessibility
 */
const PrimaryButton = ({ to, label, onClick, ariaLabel }) => {
  // Detect if it's an internal anchor
  const isAnchor = to?.startsWith('#');

  if (isAnchor) {
    return (
      <a
        href={to}
        className={styles.primaryButton}
        aria-label={ariaLabel || label}
      >
        {label}
      </a>
    );
  }

  if (to) {
    return (
      <Link
        to={to}
        className={styles.primaryButton}
        aria-label={ariaLabel || label}
      >
        {label}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={styles.primaryButton}
      aria-label={ariaLabel || label}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
