import React, { useState, useMemo } from 'react';
import styles from "./CertificateTableCTA.module.css";
import { CheckCircle, ChevronDown, ChevronUp } from "lucide-react";

const parseDuration = (durationStr) => {
    if (!durationStr) return 0;
    const [hours, minutes] = durationStr.split(':').map(Number);
    return (hours || 0) * 60 + (minutes || 0);
  };
  

// Utility: parse date string to Date
const parseDate = (dateStr) => {
  const date = new Date(dateStr);
  return isNaN(date.getTime()) ? null : date;
};

const CertificateTableCTA = ({ title, certificates = [], onCertClick }) => {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const sortedCertificates = useMemo(() => {
    if (!sortColumn) return certificates;

    return [...certificates].sort((a, b) => {
      const valA = a[sortColumn] || '';
      const valB = b[sortColumn] || '';

      if (typeof valA === 'string') {
        return sortDirection === 'asc'
          ? valA.localeCompare(valB)
          : valB.localeCompare(valA);
      }

      return sortDirection === 'asc' ? valA - valB : valB - valA;
    });
  }, [certificates, sortColumn, sortDirection]);

  const hasCertificates = sortedCertificates.length > 0;

  const renderSortIcon = (column) => {
    if (sortColumn !== column) return null;
    return sortDirection === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />;
  };

  const headers = [
    { label: 'Title', key: 'title' },
    { label: 'Category', key: 'category' },
    { label: 'Provider', key: 'provider' },
    { label: 'Completed ', key: 'date' },
    { label: 'Duration (HH:MM) ', key: 'duration' },
    { label: 'Top Skills', key: 'skills' }
  ];

  const summary = useMemo(() => {
    const providerCount = {};
    const categoryCount = {};
    const skillsSet = new Set();
    const skillFrequency = {};
    const durations = [];
    const dates = [];

    certificates.forEach(cert => {
      const provider = cert.provider || 'LinkedIn Learning';
      const category = cert.category || 'Uncategorized';

      providerCount[provider] = (providerCount[provider] || 0) + 1;
      categoryCount[category] = (categoryCount[category] || 0) + 1;

      const durationMins = parseDuration(cert.duration);
      durations.push(durationMins);

      const certDate = parseDate(cert.date);
      if (certDate) dates.push(certDate);

      (cert.skills || []).forEach(skill => {
        skillsSet.add(skill);
        skillFrequency[skill] = (skillFrequency[skill] || 0) + 1;
      });
    });

    const totalDurationMins = durations.reduce((a, b) => a + b, 0);
    const totalDurationHrs = (totalDurationMins / 60).toFixed(1);

    const dateRange = dates.length
      ? `${dates.sort((a, b) => a - b)[0].toLocaleDateString()} → ${dates.sort((a, b) => b - a)[0].toLocaleDateString()}`
      : '—';

    const topSkill = Object.entries(skillFrequency).sort((a, b) => b[1] - a[1])[0]?.[0] || '—';

    return {
      providerCount,
      categoryCount,
      totalDurationHrs,
      dateRange,
      uniqueSkills: skillsSet.size,
      totalCertificates: certificates.length,
      topSkill
    };
  }, [certificates]);

  return (
    <div className={styles.container}>
      <h2 className={styles.modalTitle}>{title} Certificates</h2>

      {hasCertificates ? (
        <>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead className={styles.tableHead}>
                <tr>
                  {headers.map(({ label, key }) => (
                    <th
                      key={key}
                      onClick={() => handleSort(key)}
                      className={styles.sortableHeader}
                    >
                      <span className={styles.headerContent}>
                        {label}
                        {renderSortIcon(key)}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sortedCertificates.map((cert, index) => (
                  <tr
                    key={index}
                    className={styles.tableRow}
                    onClick={() => onCertClick(cert)}
                    tabIndex={0}
                    role="button"
                    onKeyDown={(e) => e.key === 'Enter' && onCertClick(cert)}
                  >
                    <td>{cert.title}</td>
                    <td>{cert.category || '—'}</td>
                    <td>{cert.provider || 'LinkedIn Learning'}</td>
                    <td>{cert.date || '—'}</td>
                    <td>{cert.duration || '—'}</td>
                    <td>
                      <div className={styles.skills}>
                        {cert.skills?.length ? (
                          cert.skills.map((skill, i) => (
                            <span key={i} className={styles.skillTag}>
                              {skill}
                            </span>
                          ))
                        ) : (
                          '—'
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={styles.summaryGrid}>
  <div className={styles.summaryCard}>
    <h4>Total Certificates</h4>
    <p>{summary.totalCertificates}</p>
  </div>

  <div className={styles.summaryCard}>
    <h4>Total Duration</h4>
    <p>{summary.totalDurationHrs} hours</p>
  </div>

  <div className={styles.summaryCard}>
    <h4>Date Range</h4>
    <p>{summary.dateRange}</p>
  </div>

  <div className={styles.summaryCard}>
    <h4>Unique Top Skills</h4>
    <p>{summary.uniqueSkills}</p>
  </div>

  <div className={styles.summaryCard}>
    <h4>Most Common Skill</h4>
    <p>{summary.topSkill}</p>
  </div>

  <div className={styles.summaryCard}>
  <h4>Courses by Provider</h4>
  <ul className={styles.summaryList}>
    {Object.entries(summary.providerCount).map(([provider, count]) => (
      <li key={provider}>
      {provider} <span className={styles.countHighlight}>({count})</span>
    </li>
    
    ))}
  </ul>
</div>

<div className={styles.summaryCard}>
  <h4>Courses by Category</h4>
  <ul className={styles.summaryList}>
    {Object.entries(summary.categoryCount).map(([category, count]) => (
      <li key={category}>
      {category} <span className={styles.countHighlight}>({count})</span>
    </li>
    
    ))}
  </ul>
</div>

</div>

        </>
      ) : (
        <div className={styles.emptyState}>
          <CheckCircle className={styles.emptyIcon} size={48} />
          <p>No certificates available in this section yet.</p>
        </div>
      )}
    </div>
  );
};

export default CertificateTableCTA;
