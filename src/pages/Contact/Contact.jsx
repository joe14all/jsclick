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
      const response = await fetch(
        'https://o1pnvpwfq3.execute-api.us-east-1.amazonaws.com/Prod/send-email',
        {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            // Add any required API keys or auth headers here
          },
          body: JSON.stringify(formData),
        }
      );

      const responseData = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Handle API-specific error messages
        setError(responseData.error || 'Failed to send message. Please try again.');
        if (responseData.details) {
          console.error('API Error Details:', responseData.details);
        }
      }
    } catch (err) {
      setError(err.message || 'An error occurred. Please check your connection.');
    } finally {
      setLoading(false);
    }
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
              Let’s connect!
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
                  minLength="2"
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
                  pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
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
                />
              </div>

              <div className={styles.inputGroup}>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  minLength="10"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={styles.submitButton} 
                disabled={loading}
                aria-busy={loading}
              >
                {loading ? 'Sending...' : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </button>

              {success && (
                <p className={styles.successMessage}>
                  Message sent successfully! 🎉
                </p>
              )}
              
              {error && (
                <p className={styles.errorMessage}>
                  ⚠️ {error}
                  <br />
                  <small>Please check your inputs and try again.</small>
                </p>
              )}
            </form>
          </AnimatedSection>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;