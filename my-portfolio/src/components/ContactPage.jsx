import { useState } from "react";
import "./ContactPage.css";

const workExperience = [
  {
    role: "Senior Product Designer",
    company: "TechFlow Solutions",
    details: [
      "Leading design systems for enterprise SaaS platforms.",
      "Collaborating with engineering teams to ensure pixel-perfect implementation.",
      "Mentoring junior designers and overseeing creative direction.",
    ],
  },
  {
    role: "UI/UX Designer",
    company: "Creative Pulse Agency",
    details: [
      "Delivered high-fidelity prototypes for Fortune 500 clients.",
      "Conducted user research and usability testing for mobile applications.",
      "Increased client conversion rates by 25% through iterative redesigns.",
    ],
  },
  {
    role: "Junior Web Developer",
    company: "StartUp Hub",
    details: [
      "Developed responsive landing pages using React and Tailwind CSS.",
      "Maintained internal CMS tools and documentation.",
      "Assisted in backend API integrations.",
    ],
  },
];

const tools = {
  Design: ["Figma", "Adobe XD", "Prototyping", "User Research", "Design Systems"],
  Development: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js"],
};

const navItems = ["Home", "Contact"];

function Icon({ name, size = 18 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

const icons = {
    logo: (
      <svg {...common}>
        <rect x="5" y="5" width="14" height="14" rx="3" transform="rotate(45 12 12)" />
      </svg>
    ),
    briefcase: (
      <svg {...common}>
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
    wrench: (
      <svg {...common}>
        <path d="M14.7 6.3a4 4 0 0 0-5 5L3 18v3h3l6.7-6.7a4 4 0 0 0 5-5l-2.4 2.4-2.8-2.8 2.2-2.6Z" />
      </svg>
    ),
    mail: (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
    pin: (
      <svg {...common}>
        <path d="M20 10c0 5-8 11-8 11s-8-6-8-11a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    send: (
      <svg {...common}>
        <path d="m22 2-7 20-4-9-9-4 20-7Z" />
        <path d="M22 2 11 13" />
      </svg>
    ),
    external: (
      <svg {...common}>
        <path d="M15 3h6v6" />
        <path d="M10 14 21 3" />
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      </svg>
    ),
    file: (
      <svg {...common}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6" />
        <path d="M9 15h6" />
      </svg>
    ),
    linkedin: (
      <svg {...common}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    github: (
      <svg {...common}>
        <path d="M15 22v-4a4 4 0 0 0-1-3c3 0 6-2 6-7a5.4 5.4 0 0 0-1.5-3.8 5 5 0 0 0-.1-3.2s-1.2 0-3.9 1.5a13.4 13.4 0 0 0-7 0C4.8 1 3.6 1 3.6 1a5 5 0 0 0-.1 3.2A5.4 5.4 0 0 0 2 8c0 5 3 7 6 7a4 4 0 0 0-1 3v4" />
        <path d="M9 18c-4.5 2-5-2-7-2" />
      </svg>
    ),
  };

  return icons[name] || null;
}

function Brand() {
  return (
    <a className="contact-brand" href="#home" aria-label="Kasande Emily">
      Kasande Emily
    </a>
  );
}

function TimelineSection({ title, icon, items }) {
  return (
    <section className="timeline-section" aria-labelledby={`${title}-heading`}>
      <div className="eyebrow" id={`${title}-heading`}>
        <Icon name={icon} size={14} />
        {title}
      </div>
      <div className="timeline-list">
        {items.map((item) => (
          <article className="timeline-item" key={item.role}>
            <span className="timeline-dot" />
            <div className="timeline-title-row">
              <h3>{item.role}</h3>
            </div>
            <p className="timeline-company">{item.company}</p>
            <ul>
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactCard({ icon, label, value, href }) {
  const content = (
    <>
      <span className="info-icon">
        <Icon name={icon} size={18} />
      </span>
      <span>
        <small>{label}</small>
        <strong>{value}</strong>
      </span>
    </>
  );

  return href ? (
    <a className="contact-info-card" href={href}>
      {content}
    </a>
  ) : (
    <div className="contact-info-card">{content}</div>
  );
}

function SocialCard({ icon, title, description, tone, href }) {
  return (
    <a className="social-card" href={href || "#social"} aria-label={`${title} profile`} target={href ? "_blank" : undefined} rel={href ? "noopener noreferrer" : undefined}>
      <span className={`social-card-icon ${tone}`}>
        <Icon name={icon} size={22} />
      </span>
      <span className="social-card-copy">
        <strong>{title}</strong>
        <small>{description}</small>
      </span>
      <span className="social-card-arrow">
        <Icon name="external" size={18} />
      </span>
    </a>
  );
}

export default function ContactPage() {
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setStatus("Thanks, your message is ready to send.");
  }

  return (
    <div className="contact-page">
      <header className="contact-nav-wrap">
        <nav className="contact-nav" aria-label="Primary navigation">
          <Brand />
          <div className="contact-nav-links">
            {navItems.map((item) => (
              <a className={item === "Contact" ? "active" : ""} href={`#${item === "Contact" ? "contact" : item.toLowerCase()}`} key={item}>
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="contact-shell">
        <aside className="credential-panel" aria-label="Professional credentials">
          <div className="credential-intro">
            <h1>Professional Credentials</h1>
            <p>
              A summary of my professional journey and expertise in digital product development.
            </p>
            <a className="download-resume" href="#resume-download">
              <Icon name="file" size={15} />
              Download PDF Resume
            </a>
          </div>

<TimelineSection title="Work Experience" icon="briefcase" items={workExperience} />

          <section className="tools-section" aria-labelledby="tools-heading">
            <div className="eyebrow" id="tools-heading">
              <Icon name="wrench" size={14} />
              Expertise & Tools
            </div>
            {Object.entries(tools).map(([group, values]) => (
              <div className="tool-group" key={group}>
                <h3>{group}</h3>
                <div className="tool-tags">
                  {values.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </aside>

        <section className="message-panel" aria-labelledby="contact-heading">
          <div className="contact-hero">
            <h2 id="contact-heading">Let's work together.</h2>
            <p>Currently available for new opportunities and freelance collaborations.</p>
          </div>

<div className="contact-info-grid">
             <ContactCard icon="mail" label="Email Me" value="emilykasande1@gmail.com" href="mailto:emilykasande1@gmail.com" />
             <ContactCard icon="pin" label="Location" value="Kampala Mukono, Uganda" />
           </div>

          <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
            <div className="form-heading">
              <h3>Send a Message</h3>
              <p>
                Have a specific project in mind? Fill out the form below and I'll get back to you
                within 24 hours.
              </p>
            </div>

            <div className="form-row">
              <label>
                <span>First Name</span>
                <input name="firstName" placeholder="Jane" type="text" />
              </label>
              <label>
                <span>Last Name</span>
                <input name="lastName" placeholder="Doe" type="text" />
              </label>
            </div>

            <label>
              <span>Work Email</span>
              <input name="email" placeholder="jane.doe@company.com" type="email" required />
            </label>

            <label>
              <span>Subject</span>
              <input name="subject" placeholder="Project Inquiry - Web Redesign" type="text" />
            </label>

            <label>
              <span>How can I help you?</span>
              <textarea name="message" placeholder="Tell me a bit about your project goals and timeline..." rows="7" required />
            </label>

            <button className="send-button" type="submit">
              Send Message
              <Icon name="send" size={17} />
            </button>
            {status && <p className="form-status" role="status">{status}</p>}
          </form>

<div className="social-section">
             <h3>Social Vetting</h3>
             <div className="social-grid">
               <SocialCard icon="linkedin" title="LinkedIn" description="Professional Profile" tone="linkedin" href="https://www.linkedin.com/in/kasande-emily-a21aa5373/" />
               <SocialCard icon="github" title="GitHub" description="Code Repositories" tone="github" href="https://github.com/Emilykasande" />
             </div>
           </div>

<aside className="offline-card" id="resume-download">
             <div>
               <h3>Need an offline copy?</h3>
               <p>Download my complete project portfolio in PDF format for sharing.</p>
             </div>
             <a href="/kasande-emily-cv.pdf" download>
               <Icon name="file" size={15} />
               Full Portfolio.pdf
             </a>
           </aside>
        </section>
      </main>

      <footer className="contact-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <Brand />
            <p>
              Showcasing expertise in digital product design and full-stack development. Building
              the web of tomorrow, today.
            </p>
<div className="footer-socials" aria-label="Social links">
               <a href="https://www.linkedin.com/in/kasande-emily-a21aa5373/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><Icon name="linkedin" size={16} /></a>
               <a href="https://github.com/Emilykasande" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><Icon name="github" size={16} /></a>
             </div>
          </div>

<div className="footer-column">
             <h3>Sitemap</h3>
             <a href="#home">Home</a>
             <a href="#contact">Contact</a>
           </div>

<div className="footer-column">
             <h3>Contact</h3>
             <p><Icon name="mail" size={13} /> emilykasande1@gmail.com</p>
             <p><Icon name="pin" size={13} /> Kampala Mukono, Uganda</p>
           </div>

<div className="footer-column">
             <h3>Resources</h3>
             <a className="footer-download" href="/kasande-emily-cv.pdf" download>
               <Icon name="file" size={14} />
               Download CV
             </a>
           </div>
        </div>

<div className="footer-bottom">
           <span>© 2025 Kasande Emily. All rights reserved.</span>
           <div>
             <a href="#privacy">Privacy Policy</a>
             <a href="#terms">Terms of Service</a>
           </div>
         </div>
      </footer>
    </div>
  );
}