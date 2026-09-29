import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaPlayCircle, FaShieldAlt } from 'react-icons/fa';
import heroVideo from '../../assets/videos/hero-bg.mp4';
import '../../pages/Home.css';

function HeroSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const setPlaybackRate = () => {
      video.playbackRate = 1.15;
    };

    video.addEventListener('loadedmetadata', setPlaybackRate);
    setPlaybackRate();

    const playPromise = video.play();
    playPromise?.catch(() => {
      // Muted autoplay can be restricted by browser settings.
    });

    return () => {
      video.removeEventListener('loadedmetadata', setPlaybackRate);
    };
  }, []);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-kicker">
          <span className="hero-kicker-line" aria-hidden="true" />
          <FaShieldAlt aria-hidden="true" />
          <span>Cybersecurity training for the real world</span>
        </div>

        <h1 id="hero-title" className="hero-title">
          Defend Today.
          <span>Secure Tomorrow.</span>
        </h1>

        <p className="hero-subtitle">
          Build practical cybersecurity skills through expert-led training,
          hands-on labs and learning paths designed for the challenges ahead.
        </p>
            

            
        <div className="hero-actions">
          <Link to="/enquiry" className="cta-button hero-primary-cta">
            Start Your Journey
            <FaArrowRight aria-hidden="true" />
          </Link>
          {/* <Link to="/courses" className="hero-secondary-cta">
            <FaPlayCircle aria-hidden="true" />
            Explore Courses
          </Link> */}
        </div>

        <div className="hero-trust" aria-label="CyberDefentech learning benefits">
          <div className="hero-trust-item">
            <strong>Hands-on</strong>
            <span>Practical labs</span>
          </div>
          <span className="hero-trust-divider" aria-hidden="true" />
          <div className="hero-trust-item">
            <strong>Expert-led</strong>
            <span>Real-world guidance</span>
          </div>
          <span className="hero-trust-divider" aria-hidden="true" />
          <div className="hero-trust-item">
            <strong>Career-ready</strong>
            <span>Skills that matter</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-cue" aria-hidden="true">
        <span>Scroll to explore</span>
        <span className="hero-scroll-line" />
      </div>
    </section>
  );
}

export default HeroSection;
