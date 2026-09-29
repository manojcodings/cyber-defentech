import { useId, useState } from 'react';
import {
  FaArrowRight,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
  FaShieldAlt,
} from 'react-icons/fa';
import './FloatingForm.css';

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

function FloatingForm() {
  const [isOpen, setIsOpen] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formId = useId();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    // Connect your enquiry API here when it is ready.
  };

  const handleToggle = () => {
    setIsOpen((current) => !current);
    setIsSubmitted(false);
  };

  return (
    <aside
      className={`floating-form-wrapper ${isOpen ? 'open' : ''}`}
      aria-label="Quick enquiry"
    >
      <button
        className="floating-tab"
        onClick={handleToggle}
        type="button"
        aria-expanded={isOpen}
        aria-controls={`${formId}-panel`}
        aria-label={isOpen ? 'Close quick enquiry form' : 'Open quick enquiry form'}
      >
        <span className="floating-tab-icon" aria-hidden="true">
          {isOpen ? <FaChevronRight /> : <FaChevronLeft />}
        </span>
        <span className="floating-tab-text">Quick Enquiry</span>
      </button>

      <div
        id={`${formId}-panel`}
        className="floating-form-panel"
        role="dialog"
        aria-labelledby={`${formId}-title`}
        aria-describedby={`${formId}-description`}
        aria-hidden={!isOpen}
      >
        <div className="floating-form-header">
          <div className="floating-form-heading">
            <span className="floating-form-kicker">
              <FaShieldAlt aria-hidden="true" />
              Start your journey
            </span>
            <h2 id={`${formId}-title`}>Quick Enquiry</h2>
            <p id={`${formId}-description`}>
              Get a callback from our course advisor within 24 hours.
            </p>
          </div>
          <span className="floating-form-badge" aria-hidden="true">
            <FaArrowRight />
          </span>
        </div>

        {isSubmitted ? (
          <div className="floating-success" role="status" aria-live="polite">
            <FaCheckCircle aria-hidden="true" />
            <h3>Thank you for reaching out!</h3>
            <p>Our team will contact you soon.</p>
            <button
              type="button"
              className="floating-reset-btn"
              onClick={() => setIsSubmitted(false)}
            >
              Send another enquiry
            </button>
          </div>
        ) : (
          <form className="floating-enquiry-form" onSubmit={handleSubmit}>
            <div className="floating-field">
              <label htmlFor={`${formId}-name`}>Full name</label>
              <input
                id={`${formId}-name`}
                name="name"
                type="text"
                placeholder="Enter your full name"
                autoComplete="name"
                required
              />
            </div>

            <div className="floating-field">
              <label htmlFor={`${formId}-phone`}>Phone number</label>
              <input
                id={`${formId}-phone`}
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                autoComplete="tel"
                inputMode="tel"
                required
              />
            </div>

            <div className="floating-field">
              <label htmlFor={`${formId}-email`}>Email address</label>
              <input
                id={`${formId}-email`}
                name="email"
                type="email"
                placeholder="Enter your email address"
                autoComplete="email"
                required
              />
            </div>

            <div className="floating-field">
              <label htmlFor={`${formId}-course`}>Choose a course</label>
              <select
                id={`${formId}-course`}
                name="course"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select a course
                </option>
                {courseOptions.map(({ value, label }) => (
                  <option value={value} key={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="floating-submit-btn">
              Submit Enquiry
              <FaArrowRight aria-hidden="true" />
            </button>

            <p className="floating-form-note">
              Your details are safe with us. No spam, ever.
            </p>
          </form>
        )}
      </div>
    </aside>
  );
}

export default FloatingForm;
