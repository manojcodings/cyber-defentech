export const partnersData = {
  'ec-council': {
    name: 'EC-Council',
    certifications: [
      'CEH v13 AI Theory',
      'CEH v13 Practical Condition Apply',
      'CEH v13 Practical',
      'CEH v13 Master',
      'CHFI (Computer Hacking Forensic Investigator)',
      'CSA (Certified SOC Analyst)',
      'ECIH (EC-Council Certified Incident Handler)',
      'CPENT (Certified Penetration Testing Professional)',
      'CTIA (Certified Threat Intelligence Analyst)',
      'CND (Certified Network Defender)',
      'CCSE (Certified Cloud Security Engineer)',
    ],
  },

  'isaca': {
    name: 'ISACA',
    certifications: [
      'CISA (Certified Information System Auditor)',
      'CISM (Certified Information System Manager)',
      'CGEIT (Certified in the Governance of Enterprise IT)',
    ],
  },

  'comptia': {
    name: 'CompTIA',
    certifications: [
      'A+',
      'Network+',
      'Security+',
      'Data Sys+',
      'Server+',
      'Project+',
      'Linux+',
      'Cloud+',
      'CYSA+ (CompTIA Cybersecurity Analyst+)',
      'Pentest+',
      'CASP+ (CompTIA Advance Security+)',
    ],
  },

  'aws': {
    name: 'AWS',
    certifications: [
      'Security Specialty',
      'Advanced Networking Specialty',
      'Machine Learning Specialty',
      'Solutions Architect Professional',
      'DevOps Engineer Professional',
      'Data Engineering',
      'Developer',
      'SysOps Administrator',
      'Solutions Architect',
      'Machine Learning Engineer',
      'AI Practitioner',
      'Cloud Practitioner',
      'AWS Certified Solutions Architect Professional',
      'AWS Certified DevOps Engineer Professional',
      'AWS Certified Data Engineer Associate',
      'AWS Certified SysOps Administrator Associate',
      'AWS Certified Developer Associate',
      'AWS Certified Solutions Architect Associate',
    ],
  },

  'offsec': {
    name: 'OffSec',
    certifications: [
      'OSWA (Offensive Security Web Assessor)',
      'OSCP (Offensive Security Certified Professional)',
      'OSIR (OffSec Certified Incident Responder)',
      'OSTH (OffSec Threat Hunter)',
    ],
  },

  'tuv': {
    name: 'TÜV',
    certifications: [
      'ISO 27001:2022 Lead Auditor',
      'ISO 27001: Lead Implementor',
      'ISO 14064: (GHG Accounting and Verification): Lead Auditor',
      'ISO 9001: Lead Implementor',
      'ISO/IEC 42001 Lead Auditor',
      'ISO 9001: Lead Auditor',
      'ISO 9001: Foundation',
      'ISO/IEC 27001: Foundation',
    ],
  },

  'cisco': {
    name: 'CISCO',
    certifications: [
      'CCIE (CISCO Certified Internetwork Expert)',
      'CCNP (CISCO Certified Network Professional)',
      'CCNA (CISCO Certified Network Associate)',
      'CISCO + Splunk',
    ],
  },

  'splunk': {
    name: 'Splunk',
    certifications: [
      'Splunk Certification Training',
      'CISCO + Splunk',
    ],
  },

  'isc2': {
    name: '(ISC)²',
    certifications: [
      'CCSP (Certified Cloud Security Professional)',
      'CISSP (Certified Information Systems Security Professional)',
      'CC (Certified in CyberSecurity)',
      'CSSLP (Certified Secure Software Lifecycle Professional)',
      'CGRC (Governance, Risk and Compliance Certification)',
      'SSCP (System Security Certified Practitioner) Training',
    ],
  },

  'vmware': {
    name: 'VMware',
    certifications: [
      'VMware NSX: Install, Configure, Manage [V4.0]',
      'VMware Cloud Foundation: Troubleshooting [V5.0]',
      'Kubernetes Fundamentals and Cluster Operations',
      'VMware vSphere: Install, Configure, Manage [V8]',
    ],
  },

  'oracle': {
    name: 'Oracle',
    certifications: [
      'Oracle Database 19c: SQL Workshop',
      'Application Integration on Oracle Cloud Ed 4',
      'Oracle Exadata Database Machine Implementation and Administration',
      'Oracle Cloud Infrastructure Architect Associate',
    ],
  },

  'microsoft': {
    name: 'Microsoft',
    certifications: [
      'Microsoft Security, Compliance, & Identity Fundamentals (SC-900)',
      'Microsoft Identity and Access Administration (SC-300)',
      'Microsoft Security Operations Analyst (SC-200)',
      'Microsoft SC-100',
    ],
  },

  'pmi': {
    name: 'PMI',
    certifications: [
      'Project Management Professional (PMP)',
    ],
  },
}

export function getPartner(slug) {
  return partnersData[slug] || null
}