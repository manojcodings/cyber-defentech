import { useEffect, useId, useState } from 'react';
import {
  FaArrowRight,
  FaCheckCircle,
  FaShieldAlt,
  FaTimes,
} from 'react-icons/fa';
import logo from '../assets/logo.webp';
import './PopupForm.css';

const courseOptions = [
  { value: 'ethical-hacking', label: 'Ethical Hacking' },
  { value: 'network-security', label: 'Network Security' },
  { value: 'soc-analyst', label: 'SOC Analyst' },
  { value: 'penetration-testing', label: 'Penetration Testing' },
  { value: 'digital-forensics', label: 'Digital Forensics' },
  { value: 'cloud-security', label: 'Cloud Security' },
  { value: 'web-application-security', label: 'Web Application Security' },
  { value: 'mobile-app-pentesting', label: 'Mobile & App Pentesting' },
  { value: 'malware-analysis', label: 'Malware Analysis' },
  { value: 'other', label: 'Other' },
];

function PopupForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dialogId = useId();

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('popupShown');

    if (alreadyShown) return undefined;

    const timer = window.setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem('popupShown', 'true');
    }, 2000);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = '';
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setIsSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    // Connect your enquiry API here when it is ready.
  };

  if (!isOpen) return null;

  return (
    <div
      className="popup-overlay"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) handleClose();
      }}
    >
      <div
        className="popup-box"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${dialogId}-title`}
        aria-describedby={`${dialogId}-description`}
      >
        <button
          type="button"
          className="popup-close"
          onClick={handleClose}
          aria-label="Close enquiry form"
        >
          <FaTimes aria-hidden="true" />
        </button>

        <div className="popup-header">
          <img src={logo} alt="CyberDefentech" className="popup-logo" />
          <span className="popup-kicker">
            <FaShieldAlt aria-hidden="true" />
            Start your journey
          </span>
          <h2 id={`${dialogId}-title`}>Build your cybersecurity future.</h2>
          <p id={`${dialogId}-description`}>
            Share your details and our course advisor will help you choose the
            right learning path.
          </p>
        </div>

        {isSubmitted ? (
          <div className="popup-success" role="status" aria-live="polite">
            <FaCheckCircle aria-hidden="true" />
            <h3>Thank you for reaching out!</h3>
            <p>Our team will contact you shortly.</p>
            <button type="button" className="popup-secondary-btn" onClick={handleClose}>
              Close
            </button>
          </div>
        ) : (
          <form className="popup-form" onSubmit={handleSubmit}>
            <div className="popup-field">
              <label htmlFor={`${dialogId}-name`}>Full name</label>
              <input
                id={`${dialogId}-name`}
                name="name"
                type="text"
                placeholder="Enter your full name"
                autoComplete="name"
                required
              />
            </div>

            <div className="popup-field">
              <label htmlFor={`${dialogId}-phone`}>Phone number</label>
              <input
                id={`${dialogId}-phone`}
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                autoComplete="tel"
                inputMode="tel"
                required
              />
            </div>

            <div className="popup-field">
              <label htmlFor={`${dialogId}-email`}>Email address</label>
              <input
                id={`${dialogId}-email`}
                name="email"
                type="email"
                placeholder="Enter your email address"
                autoComplete="email"
                required
              />
            </div>

            <div className="popup-field">
              <label htmlFor={`${dialogId}-course`}>Select a course</label>
              <select id={`${dialogId}-course`} name="course" defaultValue="" required>
                <option value="" disabled>
                  Choose your course
                </option>
                {courseOptions.map(({ value, label }) => (
                  <option value={value} key={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="popup-submit-btn">
              Submit enquiry
              <FaArrowRight aria-hidden="true" />
            </button>

            <small className="popup-note">
              Your details are safe with us. No spam, ever.
            </small>
          </form>
        )}
      </div>
    </div>
  );
}

export default PopupForm;
