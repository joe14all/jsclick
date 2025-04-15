import React from 'react';
import styles from "./Modal.module.css";
import { X } from "lucide-react";

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modalBox}>
        <button onClick={onClose} className={styles.closeButton}>
          <X size={20} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
