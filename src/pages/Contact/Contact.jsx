import React, { useState } from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection';
import { Mail, Send, User, MessageSquare } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('https://your-api-gateway-url/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please check your connection.');
    }

    setLoading(false);
  };

  return (
    <MainLayout isHomePage={false} currentPage="Contact">
      <div className={styles.contactContainer}>
        <div className={styles.contactContent}>
          <AnimatedSection direction="fade" delay={0.4}>
            <h2 className={styles.title}>Get in Touch</h2>
            <p className={styles.subtitle}>
            Looking to collaborate?  
                <br />  
                Let’s connect !
              </p>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.inputGroup}>
                <User className={styles.icon} />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <Mail className={styles.icon} />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <MessageSquare className={styles.icon} />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className={styles.submitButton} disabled={loading}>
                {loading ? 'Sending...' : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </button>

              {success && <p className={styles.successMessage}>Message sent successfully!</p>}
              {error && <p className={styles.errorMessage}>{error}</p>}
            </form>
          </AnimatedSection>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
