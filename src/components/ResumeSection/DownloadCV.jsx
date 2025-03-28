// components/ResumeSection/DownloadCV.jsx
import React from 'react';
import styles from './DownloadCV.module.css';
import PDFResume from '../../assets/resume.pdf'; 
import PrimaryButton from '../Buttons/PrimaryButton';
import { Download } from 'lucide-react';


const DownloadCV = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = PDFResume;
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.downloadCv}>
      <h3 className={styles.downloadTitle}>My Resume</h3>
      <div className={styles.pdfContainer}>
        <iframe
          loading="lazy"
          src="https://www.canva.com/design/DAGOS-mv7xk/H4aKUzisx--Ces_YPjE0iA/view?embed"
          allowFullScreen
          title="Resume Preview"
          className={styles.iframePreview}
        />
      </div>
      <PrimaryButton
        onClick={handleDownload}
        label={<><Download size={18} style={{ marginRight: '8px' }} />Download PDF</>}
        ariaLabel="Download Resume PDF"
      />
    </div>
  );
};

export default DownloadCV;
