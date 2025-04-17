import React from 'react';
import styles from "./Testimonials.module.css";
import AnimatedSection from '../AnimatedSection/AnimatedSection';
import testimonialsData from './testimonialsData';

const Testimonials = () => {
  return (
    <AnimatedSection direction="zoom-out" delay={0.2}>
    <section id="testimonials" className={styles.testimonials}>
      <h2>What My Patients Say</h2>
      <div className={styles.testimonialsCarousel}>
        {testimonialsData.map((testimonial, index) => (
          <a
            key={index}
            href={testimonial.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.testimonialLink}
          >
            <div className={styles.testimonialItem}>
              <p className={styles.quote}>{testimonial.quote}</p>
              <div className={styles.starRating}>
                <span>★★★★★</span>
              </div>
              <h4>- {testimonial.author}</h4>
            </div>
          </a>
        ))}
      </div>
    </section>
    </AnimatedSection>
  );
};

export default Testimonials;