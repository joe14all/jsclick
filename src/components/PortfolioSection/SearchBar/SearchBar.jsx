import React, { useState, useEffect, useRef } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ query, setQuery, suggestions }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const inputRef = useRef(null);
  const listRef = useRef(null);

  const filteredSuggestions = suggestions
    .filter(tag => tag.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 10);

 
  const handleChange = (e) => {
    setQuery(e.target.value);
    setActiveIndex(-1);
    setShowSuggestions(true); 
  };
  

  const handleKeyDown = (e) => {
    if (!filteredSuggestions.length) return;
  
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex((prev) =>
          prev < filteredSuggestions.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex((prev) =>
          prev > 0 ? prev - 1 : filteredSuggestions.length - 1
        );
        break;
      case 'Enter':
        if (activeIndex >= 0) {
          setQuery(filteredSuggestions[activeIndex]);
          setShowSuggestions(false); // keep list open
        }
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(e.target) &&
        listRef.current &&
        !listRef.current.contains(e.target)
      ) {
        setShowSuggestions(false);
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  

  const highlightMatch = (text, query) => {
    const index = text.toLowerCase().indexOf(query.toLowerCase());
    if (index === -1) return text;
    return (
      <>
        {text.slice(0, index)}
        <mark className={styles.highlight}>{text.slice(index, index + query.length)}</mark>
        {text.slice(index + query.length)}
      </>
    );
  };

  useEffect(() => {
    if (activeIndex >= 0 && listRef.current) {
      const activeItem = listRef.current.children[activeIndex];
      if (activeItem) {
        activeItem.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [activeIndex]);

  return (
    <div className={styles.searchContainer}>
    <div className={styles.iconWrapper}>
      <div className={styles.icon}>
        <svg
          className={query ? styles.swapOff : styles.swapOn}
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <svg
          className={query ? styles.swapOn : styles.swapOff}
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </div>
    </div>
  
    <input
      type="text"
      ref={inputRef}
      value={query}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder="Search by keywords (e.g., curve, gold)"
      className={styles.searchInput}
    />
  
    {query && (
      <button
        className={styles.clearButton}
        onClick={() => {
          setQuery('');
          setActiveIndex(-1);
          inputRef.current?.focus();
        }}
        aria-label="Clear search"
      >
        <svg viewBox="0 0 20 20" className={styles.clearIcon}>
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          />
        </svg>
      </button>
    )}
  
    {showSuggestions && filteredSuggestions.length > 0 && (
      <ul className={styles.suggestions} ref={listRef}>
        {filteredSuggestions.map((tag, i) => (
          <li
            key={i}
            className={i === activeIndex ? styles.activeSuggestion : ''}
            onClick={() => {
                setQuery(tag);
                setShowSuggestions(false); 
                inputRef.current?.focus();
              }}
                        >
            {highlightMatch(tag, query)}
          </li>
        ))}
      </ul>
    )}
  </div>
  
  );
  
};

export default SearchBar;
