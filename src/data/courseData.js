// Course list + detail data (ek hi jagah se Courses page aur CourseDetail page dono use karenge)
import ethicalHackingImg from '../assets/courses/ethical-hacking.jpg'
import socAnalystImg from '../assets/courses/soc-analyst.jpg'
import networkSecurityImg from '../assets/courses/network-security.jpg'
import penTestingImg from '../assets/courses/penetration-testing.jpg'
import digitalForensicsImg from '../assets/courses/digital-forensics.jpg'
import cloudSecurityImg from '../assets/courses/cloud-security.jpg'
import malwareAnalysisImg from '../assets/courses/malware-analysis.jpg'
import webAppSecurityImg from '../assets/courses/web-app-security.jpg'
import incidentResponseImg from '../assets/courses/incident-response.jpg'
import securityComplianceImg from '../assets/courses/security-compliance.jpg'
import cryptographyImg from '../assets/courses/cryptography.jpg'
import iotSecurityImg from '../assets/courses/iot-security.jpg'

export const slugify = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

// Optional overrides: kisi course ka full title / hours / batch date / benefits alag karna ho to yahan likho
// key = slug
export const overrides = {
  'ethical-hacking': {
    fullTitle: 'Certified Ethical Hacker',
    hours: 48,
    passRate: 98,
    benefits: [
      'Master Certified Ethical Hacker with 48 hours of immersive, expert-led training',
      'Gain full domain coverage and practice with real exam simulations',
      'Interactive dynamic sessions with live demos, quizzes & mock exams',
      'Join the 98% who pass on their first attempt, with our ongoing support',
    ],
    // nextBatch: '2026-10-05',  // optional: fixed date (YYYY-MM-DD)
  },


  
}

export const coursesList = [
  { title: 'Ethical Hacking', duration: '40 Hours', mode: 'Online / Offline', level: 'Beginner', image: ethicalHackingImg },
  { title: 'SOC Analyst', duration: '60 Hours', mode: 'Online / Offline', level: 'Intermediate', image: socAnalystImg },
  { title: 'Network Security', duration: '45 Hours', mode: 'Online / Offline', level: 'Beginner', image: networkSecurityImg },
  { title: 'Penetration Testing', duration: '50 Hours', mode: 'Online', level: 'Advanced', image: penTestingImg },
  { title: 'Digital Forensics', duration: '55 Hours', mode: 'Online / Offline', level: 'Intermediate', image: digitalForensicsImg },
  { title: 'Cloud Security', duration: '60 Hours', mode: 'Online', level: 'Intermediate', image: cloudSecurityImg },
  { title: 'Malware Analysis', duration: '45 Hours', mode: 'Online', level: 'Advanced', image: malwareAnalysisImg },
  { title: 'Web App Security', duration: '40 Hours', mode: 'Online / Offline', level: 'Intermediate', image: webAppSecurityImg },
  { title: 'Incident Response', duration: '35 Hours', mode: 'Online / Offline', level: 'Intermediate', image: incidentResponseImg },
  { title: 'Security Compliance', duration: '30 Hours', mode: 'Online', level: 'Beginner', image: securityComplianceImg },
  { title: 'Cryptography', duration: '35 Hours', mode: 'Online / Offline', level: 'Advanced', image: cryptographyImg },
  { title: 'IoT Security', duration: '40 Hours', mode: 'Online', level: 'Intermediate', image: iotSecurityImg },
].map((c) => ({ ...c, slug: slugify(c.title) }))

// Default: agla Monday (kam se kam 7 din baad)
const defaultNextBatch = () => {
  const d = new Date()
  d.setDate(d.getDate() + 7)
  d.setDate(d.getDate() + ((8 - d.getDay()) % 7))
  return d
}

export function getCourse(slug) {
  const base = coursesList.find((c) => c.slug === slug)
  if (!base) return null
  const o = overrides[slug] || {}
  const hours = o.hours ?? parseInt(base.duration, 10)
  const name = o.fullTitle || base.title
  return {
    ...base,
    fullTitle: name,
    hours,
    passRate: o.passRate ?? null,
    nextBatch: o.nextBatch ? new Date(o.nextBatch) : defaultNextBatch(),
    benefits: o.benefits || [
      `Master ${base.title} with ${hours} hours of immersive, expert-led training`,
      'Gain full domain coverage and hands-on practice in real-world labs',
      'Interactive sessions with live demos, quizzes & assessments',
      'Career support with resume building and interview preparation',
    ],
    brochure: `/brochures/${slug}.pdf`, // public/brochures/ me PDF rakhna
  }
}
