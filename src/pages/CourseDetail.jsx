import { Link, useParams } from 'react-router-dom'
import {
  FaCheck,
  FaClock,
  FaLaptopCode,
  FaCalendarAlt,
  FaDownload,
  FaPlus,
} from 'react-icons/fa'
import { getCourse } from '../data/courseData'
import './CourseDetail.css'

const networkPenetrationModules = [
  {
    title: 'Introduction to Network Security',
    topics: 'Security principles, threat landscape, CIA triad, and common attack surfaces.',
  },
  {
    title: 'Network Architecture and Protocols',
    topics: 'TCP/IP, OSI model, routing, switching, DNS, HTTP/S, and network services.',
  },
  {
    title: 'Setting Up a Professional Lab Environment',
    topics: 'Virtual machines, isolated networks, snapshots, tooling, and safe testing practices.',
  },
  {
    title: 'Getting Comfortable with Kali Linux',
    topics: 'Linux fundamentals, file systems, permissions, terminal usage, and security tools.',
  },
  {
    title: 'Bash Scripting for Security Professionals',
    topics: 'Variables, conditions, loops, functions, automation, and security-focused scripts.',
  },
  {
    title: 'Passive Information Gathering',
    topics: 'OSINT, search operators, DNS intelligence, metadata, and publicly available data.',
  },
  {
    title: 'Active Information Gathering',
    topics: 'Host discovery, service enumeration, port scanning, and authorized network mapping.',
  },
  {
    title: 'Vulnerability Assessment',
    topics: 'Vulnerability identification, validation, prioritization, false positives, and risk.',
  },
  {
    title: 'Password Attacks and Credential Security',
    topics: 'Password security, authentication weaknesses, wordlists, hashes, and defenses.',
  },
  {
    title: 'Exploitation Techniques with Metasploit',
    topics: 'Metasploit workflow, payloads, sessions, validation, and responsible exploitation.',
  },
  {
    title: 'Exploit-DB and Public Exploit Research',
    topics: 'CVE research, exploit verification, version matching, and safe proof of concept testing.',
  },
  {
    title: 'Linux Enumeration',
    topics: 'System, user, process, service, file permission, and network enumeration techniques.',
  },
  {
    title: 'Linux Privilege Escalation',
    topics: 'Misconfigurations, SUID, scheduled tasks, weak permissions, and remediation.',
  },
  {
    title: 'Automated Privilege Escalation Tools',
    topics: 'Tool-assisted assessment, manual validation, reporting, and avoiding unreliable findings.',
  },
  {
    title: 'Windows Enumeration',
    topics: 'Users, services, shares, registry, policies, processes, and Windows security controls.',
  },
  {
    title: 'Windows Privilege Escalation',
    topics: 'Service weaknesses, tokens, permissions, credentials, and defensive hardening.',
  },
  {
    title: 'Pivoting and Port Forwarding',
    topics: 'Multi-network assessment, tunnels, routing concepts, and controlled lateral movement.',
  },
  {
    title: 'PowerShell for Cybersecurity',
    topics: 'PowerShell fundamentals, scripting, system administration, and security automation.',
  },
  {
    title: 'Active Directory Security',
    topics: 'Domain architecture, users, groups, trusts, policies, common weaknesses, and defenses.',
  },
  {
    title: 'Post-Exploitation and Impact Analysis',
    topics: 'Evidence collection, objectives, cleanup, impact assessment, and responsible reporting.',
  },
  {
    title: 'Metasploit in a Professional Workflow',
    topics: 'Planning, module selection, validation, documentation, and engagement discipline.',
  },
  {
    title: 'Hands-on Practice Labs: Trying Harder',
    topics: 'Guided and independent labs that build practical problem-solving and enumeration skills.',
  },
  {
    title: 'Red Team Exercises',
    topics: 'Adversary simulation, attack planning, scope control, detection awareness, and lessons learned.',
  },
  {
    title: 'Professional Penetration Testing Reports',
    topics: 'Executive summaries, technical findings, evidence, risk ratings, and remediation advice.',
  },
  {
    title: 'Capstone Penetration Testing Project',
    topics: 'End-to-end authorized assessment, presentation, report submission, and professional review.',
  },
]

const generalModules = [
  {
    title: 'Course Orientation and Security Fundamentals',
    topics: 'Core concepts, objectives, tools, professional ethics, and safe learning practices.',
  },
  {
    title: 'Industry Tools and Lab Setup',
    topics: 'Environment setup, essential tools, workflows, and practical exercises.',
  },
  {
    title: 'Practical Techniques and Real-World Scenarios',
    topics: 'Hands-on activities based on common industry use cases and security challenges.',
  },
  {
    title: 'Threat Analysis and Risk Management',
    topics: 'Threat identification, risk assessment, prioritization, and mitigation planning.',
  },
  {
    title: 'Professional Documentation and Reporting',
    topics: 'Evidence collection, clear documentation, findings, recommendations, and presentation.',
  },
  {
    title: 'Final Practical Assessment',
    topics: 'A structured project to demonstrate the skills covered throughout the course.',
  },
]

function getCourseContent(course, slug) {
  const courseName = course.fullTitle || course.title || 'Cybersecurity'
  const isNetworkPenetrationCourse = `${slug} ${courseName}`
    .toLowerCase()
    .includes('penetration')

  if (course.aboutCourse && Array.isArray(course.modules)) {
    return {
      about: course.aboutCourse,
      modules: course.modules,
    }
  }

  if (isNetworkPenetrationCourse) {
    return {
      about:
        'The Certified Network Penetration Testing program is designed to equip aspiring and working professionals with the practical skills required to assess network security and identify vulnerabilities responsibly. Through hands-on labs, real-world simulations, and modern AI-assisted security tools, participants develop a strong foundation in ethical hacking, penetration testing, vulnerability assessment, and professional reporting. The program focuses on both traditional attack techniques and emerging AI-powered threats, while maintaining a strong emphasis on authorization, safety, ethics, and defensive recommendations.',
      modules: networkPenetrationModules,
    }
  }

  return {
    about:
      `${courseName} is designed to build practical, industry-relevant cybersecurity skills through guided learning, hands-on activities, and real-world scenarios. Participants will strengthen their technical understanding, learn professional security workflows, and apply their knowledge through structured exercises and a final practical assessment.`,
    modules: generalModules,
  }
}

function CourseDetail() {
  const { slug } = useParams()
  const course = getCourse(slug)

  if (!course) {
    return (
      <main className="cd-page">
        <div className="cd-container cd-notfound">
          <h1>Course not found</h1>
          <Link to="/courses" className="cd-btn cd-btn-ghost">
            Back to all courses
          </Link>
        </div>
      </main>
    )
  }

  const date = course.nextBatch
    ? new Date(course.nextBatch).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : 'Coming soon'

  const courseContent = getCourseContent(course, slug)

  return (
    <main className="cd-page">
      <div className="cd-container">
        <Link to="/courses" className="cd-back">
          Back to courses
        </Link>

        <div className="cd-grid">
          <section className="cd-content" aria-labelledby="course-title">
            <span className="cd-level">{course.level}</span>
            <h1 id="course-title" className="cd-title">
              {course.fullTitle}
            </h1>

            <ul className="cd-benefits">
              {course.benefits.map((benefit) => (
                <li key={benefit}>
                  <span className="cd-tick" aria-hidden="true">
                    <FaCheck />
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="cd-batch">
              <FaCalendarAlt className="cd-batch-icon" aria-hidden="true" />
              <div>
                <p className="cd-batch-label">Next batch starts</p>
                <p className="cd-batch-date">{date}</p>
              </div>
            </div>

            <div className="cd-actions">
              <Link
                to="/enquiry"
                state={{ course: course.fullTitle }}
                className="cd-btn cd-btn-primary"
              >
                Enroll Course
              </Link>

              {course.brochure && (
                <a href={course.brochure} download className="cd-btn cd-btn-ghost">
                  <FaDownload aria-hidden="true" />
                  Download Brochure
                </a>
              )}
            </div>
          </section>

          <aside className="cd-visual" aria-label={`${course.fullTitle} preview`}>
            <div className="cd-image-frame">
              <img
                src={course.image}
                alt={course.fullTitle}
                loading="eager"
                onError={(event) => {
                  event.currentTarget.style.visibility = 'hidden'
                }}
              />
            </div>

            <div className="cd-meta">
              <span>
                <FaClock aria-hidden="true" />
                {course.hours} Hours
              </span>
              <span>
                <FaLaptopCode aria-hidden="true" />
                {course.mode}
              </span>
            </div>
          </aside>
        </div>

        <section className="cd-course-details" aria-labelledby="about-course-title">
          <div className="cd-section-heading">
            <span className="cd-eyebrow">Program Overview</span>
            <h2 id="about-course-title">About Course</h2>
          </div>
          <p className="cd-about-course">{courseContent.about}</p>
        </section>

        <section className="cd-course-content" aria-labelledby="course-content-title">
          <div className="cd-section-heading">
            <span className="cd-eyebrow">Learning Path</span>
            <h2 id="course-content-title">{course.fullTitle} Course Content</h2>
            <p>Explore the modules included in this practical, career-focused program.</p>
          </div>

          <div className="cd-modules">
            {courseContent.modules.map((module, index) => (
              <details className="cd-module" key={module.title}>
                <summary>
                  <span className="cd-module-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="cd-module-title">{module.title}</span>
                  <FaPlus className="cd-module-icon" aria-hidden="true" />
                </summary>
                <p>{module.topics}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default CourseDetail
