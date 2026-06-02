import {
  ArrowIcon,
  CodeIcon,
  DownloadIcon,
  PenIcon,
  ServerIcon,
} from "./Icons";
import "./Home.css";

const PhoneFrame = ({ src, alt }) => (
  <div className="home-phone-frame-wrapper">
    <div className="home-phone-frame">
      <img src={src} alt={alt} className="home-phone-screen" />
    </div>
  </div>
);

const WebFrame = ({ src, alt }) => (
  <div className="home-project-img-placeholder">
    <img src={src} alt={alt} className="home-browser-screen" />
  </div>
);

export default function Home() {
  return (
    <div className="home-root">
      <nav className="home-nav">
        <a href="#" className="home-nav-logo">
          Kasande Emily
        </a>
        <div className="home-nav-links">
          <a href="#home">Home</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="home-hero">
          <div className="home-hero-left home-fade-in">
            <div className="home-hero-badge">
              <div className="home-hero-badge-dot" />
              Available for new projects
            </div>
            <h1>
              Designing
              <br />
              for <span className="highlight-blue">Humans</span>,<br />
              Building for
              <br />
              <span className="highlight-pink">Scale.</span>
            </h1>
            <p className="home-hero-desc">
              I'm a Product Designer and Full-Stack Developer specializing in
              crafting high-performance digital experiences that solve complex
              user problems.
            </p>
            <div className="home-hero-cta">
              <button className="home-btn-primary">View My Work</button>
              <button
                className="home-btn-ghost"
                onClick={() => (window.location.hash = "#contact")}
              >
                Get in Touch
              </button>
            </div>
          </div>

          <div className="home-hero-visual home-fade-in home-delay-2">
            <img
              src="/portifolio.jpeg"
              alt="Portfolio"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />
          </div>
        </div>
      </div>

      <section id="skills" className="home-section">
        <div className="home-section-title">Skills & Expertise</div>
        <div className="home-section-sub">
          A comprehensive toolset developed through nearly a decade of
          professional work across multiple industries.
        </div>
        <div className="home-skills-grid">
          <div className="home-skill-card home-fade-in">
            <div className="home-skill-icon">
              <CodeIcon />
            </div>
            <h3>Frontend Development</h3>
            <p>
              Building scalable, accessible, and performant web applications
              using modern frameworks.
            </p>
            <div className="home-tags">
              {[
                "React",
                "TypeScript",
                "Next.js",
                "TailwindCSS",
                "Framer Motion",
              ].map((t) => (
                <span key={t} className="home-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="home-skill-card home-fade-in home-delay-1">
            <div
              className="home-skill-icon"
              style={{ background: "#EFF8FF", color: "#3B82F6" }}
            >
              <ServerIcon />
            </div>
            <h3>Backend Architecture</h3>
            <p>
              Designing robust APIs and data structures that power complex
              business logic.
            </p>
            <div className="home-tags">
              {["Node.js", "PostgreSQL", "GraphQL", "Redis", "AWS Lambda"].map(
                (t) => (
                  <span key={t} className="home-tag">
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>
          <div className="home-skill-card home-fade-in home-delay-2">
            <div
              className="home-skill-icon"
              style={{ background: "#FFF0F7", color: "#EC4899" }}
            >
              <PenIcon />
            </div>
            <h3>Product Design</h3>
            <p>
              Creating intuitive user journeys and pixel-perfect interfaces with
              a focus on usability.
            </p>
            <div className="home-tags">
              {[
                "Figma",
                "Prototyping",
                "Design Systems",
                "UX Research",
                "Interaction Design",
              ].map((t) => (
                <span key={t} className="home-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="home-section">
        <div className="home-projects-header">
          <div>
            <div className="home-section-title">Featured Projects</div>
            <div className="home-section-sub" style={{ marginBottom: 0 }}>
              A selection of recent works that demonstrate my problem-solving
              approach and technical skills.
            </div>
          </div>
          <a href="#projects" className="home-all-projects-link">
            All Projects <ArrowIcon />
          </a>
        </div>

        <div className="home-projects-grid">
          <div className="home-project-card">
            <img src="/amorive1.png" alt="Amorive" className="home-browser-screen" />
            <div className="home-project-info">
              <div className="home-project-category">Web · Relationship</div>
              <div className="home-project-title">
                Amorive - Relationship Website
              </div>
              <p className="home-project-desc">
                Website where users get knowledge about relationships and can
                download the app from App Store or Google Play.
              </p>
              <a href="https://www.getamorive.com/" target="_blank" rel="noopener noreferrer" className="home-project-link">
                View Case Study <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="home-project-card">
            <img src="/amorive.png" alt="Amorive Admin" className="home-browser-screen" />
            <div className="home-project-info">
              <div className="home-project-category">Web · Management</div>
              <div className="home-project-title">Amorive - App Management</div>
              <p className="home-project-desc">
                Admin panel to monitor app performance, approve users, and
                view/export reports.
              </p>
              <a href="#" className="home-project-link">
                View Case Study <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="home-project-card">
            <div className="home-project-img-placeholder">
              <PhoneFrame src="/shop%20on.png" alt="Shop On" />
            </div>
            <div className="home-project-info">
              <div className="home-project-category">Mobile · Shopping</div>
              <div className="home-project-title">
                Shop On - Shopping List App
              </div>
              <p className="home-project-desc">
                Helps users track shopping items, expenses, and find nearby
                vendors.
              </p>
              <a href="#" className="home-project-link">
                View Case Study <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="home-project-card">
            <img src="/mayondo.png" alt="Mayondo" className="home-browser-screen" />
            <div className="home-project-info">
              <div className="home-project-category">Web · Inventory</div>
              <div className="home-project-title">Mayondo Wood & Furniture</div>
              <p className="home-project-desc">
                Inventory management tracking sales, orders, stock, and
                suppliers.
              </p>
              <a href="#" className="home-project-link">
                View Case Study <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="home-cta-section">
        <h2>
          Have a project in mind? Let's build something extraordinary together.
        </h2>
        <p>
          Whether you're starting a new venture or looking to improve an
          existing platform, I'm here to help you achieve your goals.
        </p>
        <div className="home-cta-buttons">
          <button className="home-btn-white">Start a Conversation</button>
          <button className="home-btn-outline-white">Download My CV</button>
        </div>
      </div>

      <footer className="home-footer">
        <div className="home-footer-top">
          <div className="home-footer-brand">
            <a href="#" className="home-nav-logo" style={{ marginBottom: 0 }}>
              Kasande Emily
            </a>
            <p>
              Showcasing expertise in digital product design and full-stack
              development, building the web of tomorrow, today.
            </p>
            <div className="home-social-links">
              <a
                href="https://www.linkedin.com/in/kasande-emily-a21aa5373/"
                target="_blank"
                rel="noopener noreferrer"
                className="home-social-btn"
              >
                in
              </a>
              <a
                href="https://github.com/Emilykasande"
                target="_blank"
                rel="noopener noreferrer"
                className="home-social-btn"
              >
                ⌥
              </a>
            </div>
          </div>

          <div className="home-footer-col">
            <h4>Sitemap</h4>
            <a href="#">Home</a>
            <a href="#">Contact</a>
          </div>

          <div className="home-footer-col">
            <h4>Contact</h4>
            <div className="home-contact-line">✉ emilykasande1@gmail.com</div>
            <div className="home-contact-line">📍 Kampala Mukono, Uganda</div>
          </div>

          <div className="home-footer-col">
            <h4>Resources</h4>
            <a
              href="/kasande-emily-cv.pdf"
              className="home-download-cv-link"
              download
            >
              <DownloadIcon /> Download CV
            </a>
          </div>
        </div>

        <div className="home-footer-bottom">
          <div className="home-footer-copy">
            © 2025 Kasande Emily. All rights reserved.
          </div>
          <div className="home-footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
