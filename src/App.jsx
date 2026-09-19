import React, { useState } from "react";
import { Analytics } from "@vercel/analytics/react";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "project", label: "Project" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const OBSERVEAGENTS_SITE_URL = "https://www.observeagents.ai/";

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
          Cybersecurity analyst focused on incident response, identity security, and AI agent
          runtime intelligence.
        </h2>
        <p className="hero-description">
          I investigate security incidents across endpoint, identity, cloud, email, and network
          environments. Alongside my SOC/MDR work, I&rsquo;m building ObserveAgents &mdash; an AI
          Agent Runtime Intelligence platform that uses runtime evidence, detection rules, and
          control recommendations to help teams understand AI agent behavior.
        </p>
        <p className="hero-currently">
          Currently working as a SOC/MDR Analyst while building security tooling for AI agent
          observability and runtime detection.
        </p>
        <div className="hero-actions">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View Resume
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
            I&rsquo;m a SOC/MDR Analyst experienced in investigating endpoint, identity, cloud,
            email, and network incidents across a high-volume, multi-customer environment.
            Skilled in correlating SIEM, EDR, SaaS, identity, and network telemetry to determine
            scope, root cause, impact, and remediation, with hands-on involvement in detection
            tuning and exclusion analysis.
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
                incidents in a high-volume SOC/MDR environment supporting more than 70 customer
                environments.
              </li>
              <li>
                Perform log-based investigations across Microsoft Sentinel, Microsoft Defender
                for Endpoint, Microsoft Entra ID, Microsoft 365, CrowdStrike Falcon, QRadar,
                SentinelOne, Netskope, Zscaler, Cato Networks, and firewalls.
              </li>
              <li>
                Coordinate investigations and remediation with customers, security, IT, and
                system owners while maintaining clear findings, timelines, actions, and
                escalation records.
              </li>
              <li>
                Investigate authentication and identity-related incidents involving Microsoft
                Entra ID, Okta, Active Directory, Kerberos activity, MFA behavior, and suspicious
                sign-in patterns.
              </li>
              <li>
                Independently prioritize investigations according to severity, business impact,
                available evidence, and SLA requirements.
              </li>
              <li>
                Investigate security alerts, analyze false-positive patterns, assess exclusion
                risk, and recommend narrowly scoped detection-rule tuning to customers and
                integration teams.
              </li>
            </ul>
          </div>

          <div className="card timeline-item">
            <div className="timeline-header">
              <div>
                <h3 className="timeline-role">NOC Engineer &mdash; Ness Technologies</h3>
                <p className="timeline-meta">Israel</p>
              </div>
              <p className="timeline-dates">2023 &mdash; 2024</p>
            </div>
            <ul className="bullet-list">
              <li>Monitored enterprise infrastructure and network availability.</li>
              <li>Worked with PRTG, VMware, CheckMK, and enterprise monitoring platforms.</li>
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
        <p className="section-label section-label-standalone">Project</p>

        <div className="card project-card">
          <div className="project-card-header">
            <h3 className="project-name">ObserveAgents</h3>
            <p className="project-subtitle">AI Agent Runtime Intelligence Platform</p>
          </div>
          <p className="project-description">
            Built an AI agent runtime intelligence platform that ingests OpenTelemetry and SDK
            events, maps agent dependencies and tools, and applies detection rules to identify
            risky behavior and failed workflows &mdash; giving teams visibility, discovery, and
            control recommendations for AI agents running in production.
          </p>
          <ul className="highlight-grid">
            {PROJECT_HIGHLIGHTS.map((item) => (
              <li key={item}>
                <span className="highlight-marker" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <a href={OBSERVEAGENTS_SITE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Site
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
      "Incident Response",
      "Threat Hunting",
      "Alert Triage",
      "Root Cause Analysis",
      "Detection Tuning",
      "Exclusion Risk Assessment",
    ],
  },
  {
    title: "Security Platforms",
    skills: [
      "Microsoft Sentinel",
      "QRadar",
      "CrowdStrike Falcon",
      "Defender for Endpoint",
      "SentinelOne",
      "Cortex XDR",
      "Entra ID",
      "Okta",
    ],
  },
  {
    title: "Cloud, SASE & AI",
    skills: [
      "AWS CloudTrail",
      "Azure Activity Logs",
      "Cato",
      "Netskope",
      "Zscaler",
      "Python",
      "SQL",
      "Regex",
      "REST APIs",
      "OpenTelemetry",
      "RAG",
      "MCP",
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
            href="https://www.linkedin.com/in/ron-haviv-4617bb233/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-link-label">LinkedIn</span>
            <span className="contact-link-value">linkedin.com/in/ron-haviv</span>
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
      <Analytics />
    </>
  );
}
