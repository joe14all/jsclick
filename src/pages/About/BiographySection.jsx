import React from 'react';
import styles from './BiographySection.module.css';
import MediaCarousel from '../../components/Carousel/MediaCarousel/MediaCarousel';

// --- Imports (Same as yours) ---
import UCLAOne from '../../assets/images/Bio/EarlyLife/ucla_one.jpg';
import UCLATwo from '../../assets/images/Bio/EarlyLife/ucla_two.jpg';
import UCLAThree from '../../assets/images/Bio/EarlyLife/ucla_three.png';
import UCLAFour from '../../assets/images/Bio/EarlyLife/ucla_four.png';
import BassGuitar from '../../assets/images/Bio/hobbies/bassGuitar_one.png';
import Photography from '../../assets/images/Bio/hobbies/photography_one.jpg';
import SquashVideo from '../../assets/images/Bio/hobbies/squash.mov';
import FamilyOne from '../../assets/images/Bio/Family/family_one.jpg';
import FamilyTwo from '../../assets/images/Bio/Family/family_two.jpg';
import FamilyThree from '../../assets/images/Bio/Family/family_three.jpg';
import FamilyFour from '../../assets/images/Bio/Family/family_four.png';

const BiographySection = () => {
    const earlyLifeMedia = [
        { type: 'image', src: UCLAOne, title: 'Stepping into a new chapter — First days at UCLA' },
        { type: 'image', src: UCLAThree, title: 'Hands-on learning — Exploring labs and experiments' },
        { type: 'image', src: UCLAFour, title: 'A proud moment — Graduation day at UCLA' },
      ];
      

      const hobbiesMedia = [
        { type: 'image', src: BassGuitar, title: 'Lost in rhythm — My escape with the bass guitar' },
        { type: 'image', src: Photography, title: 'Through the lens — Capturing life’s fleeting moments' },
  
      ];
      

      const familyMedia = [
       
        { type: 'image', src: FamilyThree, title: 'Family' },
        
      ];
      

  return (
    <section className={styles.biographySection}>
      <h2>Biography</h2>

      {/* Early Career */}
      <div className={styles.storyBlock}>
        <div className={styles.textContent}>
          <h3>The Journey Begins</h3>
          <p>
            My journey into dentistry started at UCLA, where I cultivated not just a skill, but a profound mission — to improve lives through compassion and precision.
            From those early days, I was driven by a vision to bring personalized care to every patient I would serve. 
            <span className={styles.highlight}> The fusion of science and empathy</span> became my core philosophy, shaping my approach to dentistry ever since.
          </p>
        </div>
        <div className={styles.mediaCarousel}>
          <MediaCarousel mediaItems={earlyLifeMedia} />
        </div>
      </div>

      {/* Hobbies */}
      <div className={`${styles.storyBlock} ${styles.reverse}`}>
        <div className={styles.textContent}>
          <h3>Beyond Dentistry: The Creative Soul</h3>
          <p>
            Creativity breathes life into my world beyond dentistry. Whether strumming the bass guitar, capturing a perfect photo, or embracing the thrill of sports like squash, 
            these passions fuel my resilience and artistry. I believe that a fulfilled mind creates a better healer — and through these hobbies, 
            <span className={styles.highlight}> I find connection, joy, and inspiration</span> that reflect in how I engage with my patients.
          </p>
        </div>
        <div className={styles.mediaCarousel}>
          <MediaCarousel mediaItems={hobbiesMedia} />
        </div>
      </div>

      {/* Family */}
      <div className={styles.storyBlock}>
        <div className={styles.textContent}>
          <h3>The Heart of It All: Family</h3>
          <p>
            Above all, I am a husband and father. My family is my foundation — the source of my compassion, patience, and dedication. 
            Their unwavering support and love remind me daily of the importance of balance and empathy. 
            <span className={styles.highlight}> They ground me, inspire me, and motivate me</span> to be the best version of myself, both professionally and personally.
          </p>
        </div>
        <div className={styles.mediaCarousel}>
          <MediaCarousel mediaItems={familyMedia} />
        </div>
      </div>
    </section>
  );
};

export default BiographySection;
