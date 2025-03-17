// components/Buttons/PrimaryButton.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PrimaryButton.module.css';

/**
 * Reusable Primary Button
 * @param {string} to - If starts with #, renders as anchor link. If provided, renders as a Link, else as a button
 * @param {string | JSX.Element} label - Text or element inside the button
 * @param {function} onClick - Optional click handler (if used as button)
 * @param {string} ariaLabel - Optional aria-label for accessibility
 * @param {boolean} external - Optional, opens link in new tab if true
 */
const PrimaryButton = ({ to, label, onClick, ariaLabel, external = false }) => {
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
    if (external) {
      // External link that opens in new tab
      return (
        <a
          href={to}
          className={styles.primaryButton}
          aria-label={ariaLabel || label}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </a>
      );
    }

    // Internal navigation
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

  // Default button behavior
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
