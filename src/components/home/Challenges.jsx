import React from 'react';
import identifyingThreatsImg from '../../assets/challenges/identifying-threats.jpg';
import cyberRiskImg from '../../assets/challenges/cyber-risk-assessment.jpg';
import securityVulnImg from '../../assets/challenges/security-vulnerabilities.jpg';
import incidentResponseImg from '../../assets/challenges/incident-response.jpg';
import dataProtectionImg from '../../assets/challenges/data-protection.jpg';
import cloudSecurityChallengeImg from '../../assets/challenges/cloud-security.jpg';
import '../../pages/Home.css';

function Challenges() {
  return (
    <section className="section challenges">
      <div className="container">
        <h2 className="section-title">Global Cybersecurity Challenges We Address</h2>
        <div className="challenges-grid">
          {[
            { title: 'Identifying Threats', image: identifyingThreatsImg },
            { title: 'Cyber Risk Assessment', image: cyberRiskImg },
            { title: 'Security Vulnerabilities', image: securityVulnImg },
            { title: 'Incident Response', image: incidentResponseImg },
            { title: 'Data Protection', image: dataProtectionImg },
            { title: 'Cloud Security', image: cloudSecurityChallengeImg },
          ].map((challenge, idx) => (
            <div className="challenge-card" key={idx}>
              <div className="challenge-img-container">
                <img src={challenge.image} alt={challenge.title} className="challenge-img" />
              </div>
              <h3>{challenge.title}</h3>
              <p>Equipping professionals to tackle modern {challenge.title.toLowerCase()} issues effectively.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Challenges;