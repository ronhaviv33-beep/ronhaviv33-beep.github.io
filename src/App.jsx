import React, { useState } from "react";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "project", label: "Project" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const OBSERVEAGENTS_URL = "https://github.com/ronhaviv33-beep/ObserveAgents.ai";

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    scrollToId(id);
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          href="#top"
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Ron Haviv
        </a>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-nav ${menuOpen ? "is-open" : ""}`}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={(e) => handleNavClick(e, link.id)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-nav">
            View Resume
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <p className="eyebrow">Ron Haviv</p>
        <h1 className="hero-title">SOC/MDR Analyst | AI Security Builder</h1>
        <h2 className="hero-headline">
          Cybersecurity Analyst focused on incident response, identity security, and AI agent
          runtime intelligence.
        </h2>
        <p className="hero-description">
          I investigate security incidents across endpoint, identity, cloud, email, and network
          environments. Alongside my SOC/MDR work, I&rsquo;m building ObserveAgents &mdash; an AI
          Agent Runtime Intelligence platform focused on visibility, detection rules, and control
          recommendations for AI agent behavior.
        </p>
        <div className="hero-actions">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View Resume
          </a>
          <a href={OBSERVEAGENTS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            View ObserveAgents
          </a>
          <a
            href="#contact"
            className="btn btn-ghost"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("contact");
            }}
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-label">About</p>
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p>
            I&rsquo;m a cybersecurity professional with hands-on experience in security
            monitoring, incident response, phishing investigation, identity security, root cause
            analysis, and threat hunting. I work with SIEM, EDR, identity, SaaS, and network
            security telemetry to investigate suspicious activity, determine incident scope, and
            support remediation.
          </p>
          <p>
            I&rsquo;m also building ObserveAgents, a security and observability platform for AI
            agents. The project combines runtime evidence, agent discovery, detection rules, and
            Gateway control recommendations to help teams understand what their AI agents are
            doing in production.
          </p>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <p className="section-label">Experience</p>
        <h2 className="section-title">Experience</h2>

        <div className="timeline">
          <div className="card timeline-item">
            <div className="timeline-header">
              <div>
                <h3 className="timeline-role">SOC / MDR Analyst &mdash; QMasters</h3>
                <p className="timeline-meta">Israel</p>
              </div>
              <p className="timeline-dates">2024 &mdash; Present</p>
            </div>
            <ul className="bullet-list">
              <li>
                Investigate and respond to endpoint, identity, cloud, email, and network security
                incidents in a fast-paced SOC/MDR environment.
              </li>
              <li>
                Analyze alerts from SIEM, EDR, identity, SaaS, and network security platforms to
                determine severity, scope, and business impact.
              </li>
              <li>
                Investigate phishing, malware activity, account compromise, suspicious
                authentication, Kerberos-related activity, and endpoint threats.
              </li>
              <li>
                Correlate telemetry from Microsoft Sentinel, Microsoft Defender for Endpoint,
                Microsoft Entra ID, Microsoft 365, CrowdStrike Falcon, QRadar, SentinelOne,
                Netskope, Zscaler, Cato Networks, and firewall platforms.
              </li>
              <li>
                Produce customer-facing incident summaries with investigation findings, root
                cause, affected assets, and remediation recommendations.
              </li>
            </ul>
          </div>

          <div className="card timeline-item">
            <div className="timeline-header">
              <div>
                <h3 className="timeline-role">NOC / Technical Operations Experience</h3>
              </div>
            </div>
            <ul className="bullet-list">
              <li>
                Monitored enterprise infrastructure, network systems, applications, and service
                availability.
              </li>
              <li>
                Worked with monitoring and infrastructure platforms including PRTG, VMware,
                Checkmk, and enterprise monitoring tools.
              </li>
              <li>
                Investigated operational alerts, escalated incidents, and supported
                troubleshooting across IT environments.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const PROJECT_HIGHLIGHTS = [
  "Runtime visibility for AI agents",
  "OpenTelemetry-based ingestion",
  "Runtime events ingestion",
  "AI agent discovery and dependency mapping",
  "Tools, MCP servers, and provider mapping",
  "Detection rules for risky behavior",
  "Gateway control recommendations",
  "Python SDK for low-friction integration",
];

function Project() {
  return (
    <section id="project" className="section">
      <div className="container">
        <p className="section-label">Project</p>
        <h2 className="section-title">Featured Project</h2>

        <div className="card project-card">
          <div className="project-card-header">
            <h3 className="project-name">ObserveAgents</h3>
            <p className="project-subtitle">AI Agent Runtime Intelligence Platform</p>
          </div>
          <p className="project-description">
            Designed and developed an AI agent runtime intelligence platform for visibility,
            discovery, and control recommendations. The system ingests OpenTelemetry traces and
            runtime events, discovers running AI agents and dependencies, maps tools, MCP servers,
            providers, and applies detection rules to identify risky behavior, unknown agents,
            failed workflows, and high-risk control candidates in a Gateway Control Center.
          </p>
          <ul className="highlight-grid">
            {PROJECT_HIGHLIGHTS.map((item) => (
              <li key={item}>
                <span className="highlight-marker" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <a href={OBSERVEAGENTS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View Project on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

const SKILL_CARDS = [
  {
    title: "Security Operations",
    skills: [
      "Threat Hunting",
      "Incident Response",
      "Alert Triage",
      "Root Cause Analysis",
      "Malware Investigation",
      "Phishing Investigation",
      "Threat Intelligence",
    ],
  },
  {
    title: "Identity & Cloud Security",
    skills: [
      "Microsoft Entra ID",
      "Microsoft 365 Security",
      "Okta",
      "Active Directory",
      "Kerberos",
      "Suspicious Authentication",
      "Account Compromise Investigation",
    ],
  },
  {
    title: "SIEM / EDR / Security Tools",
    skills: [
      "Microsoft Sentinel",
      "CrowdStrike Falcon",
      "Microsoft Defender for Endpoint",
      "QRadar",
      "SentinelOne",
      "Netskope",
      "Zscaler",
      "Cato Networks",
      "Firewall Investigation",
    ],
  },
  {
    title: "AI Security & Product",
    skills: [
      "AI Agent Runtime Intelligence",
      "OpenTelemetry",
      "Runtime Events",
      "Detection Rules",
      "Gateway Control Recommendations",
      "SaaS Product Development",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <p className="section-label">Skills</p>
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          {SKILL_CARDS.map((group) => (
            <div className="card skill-card" key={group.title}>
              <h3 className="skill-card-title">{group.title}</h3>
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <p className="section-label">Education</p>
        <h2 className="section-title">Education</h2>

        <div className="card education-card">
          <div className="timeline-header">
            <div>
              <h3 className="timeline-role">Bachelor of Science (B.Sc.) in Information Systems</h3>
              <p className="timeline-meta">Cybersecurity Specialization</p>
              <p className="timeline-meta">The Academic College of Tel Aviv-Yaffo</p>
            </div>
            <p className="timeline-dates">2021 &mdash; 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <p className="section-label">Contact</p>
        <h2 className="section-title">Contact</h2>
        <p className="contact-text">
          I&rsquo;m open to cybersecurity, SOC/MDR, threat hunting, detection engineering, and AI
          security opportunities.
        </p>

        <div className="contact-links">
          <a className="card contact-link" href="mailto:ron.haviv33@gmail.com">
            <span className="contact-link-label">Email</span>
            <span className="contact-link-value">ron.haviv33@gmail.com</span>
          </a>
          <a
            className="card contact-link"
            href="https://github.com/ronhaviv33-beep"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-link-label">GitHub</span>
            <span className="contact-link-value">github.com/ronhaviv33-beep</span>
          </a>
          {/* TODO: replace with Ron's real LinkedIn profile URL */}
          <a
            className="card contact-link"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-link-label">LinkedIn</span>
            <span className="contact-link-value">linkedin.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>&copy; {new Date().getFullYear()} Ron Haviv. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Project />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
