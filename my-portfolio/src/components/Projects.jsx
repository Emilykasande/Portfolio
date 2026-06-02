import { useState } from "react";
import "./Projects.css";

const PhoneFrame = ({ src, alt }) => (
  <div className="projects-card-frame">
    <div className="projects-phone-frame">
      <img src={src} alt={alt} className="projects-phone-screen" />
    </div>
  </div>
);

const WebFrame = ({ src, alt }) => (
  <div className="projects-card-frame">
    <img src={src} alt={alt} className="projects-browser-screen" />
  </div>
);

const NAV_LINKS = ["Home", "Projects", "Contact"];

const FILTERS = ["All Projects", "Web Apps", "Mobile"];

const PROJECTS = [
  {
    id: 1,
    category: "Web",
    title: "Amorive - Relationship Website",
    description: "Website where users get knowledge about relationships and can download the app from App Store or Google Play.",
    tags: ["React", "Marketing"],
    image: "/amorive1.png",
    filter: "Web Apps",
  },
  {
    id: 2,
    category: "Web",
    title: "Amorive - App Management",
    description: "Admin panel to monitor app performance, approve users, and view/export reports.",
    tags: ["React", "Admin", "Reports"],
    image: "/amorive.png",
    filter: "Web Apps",
  },
  {
    id: 3,
    category: "Mobile",
    title: "Shop On - Shopping List App",
    description: "Helps users track shopping items, expenses, and find nearby vendors.",
    tags: ["React Native", "Shopping", "Location"],
    image: "/shop%20on.png",
    filter: "Mobile",
  },
  {
    id: 4,
    category: "Web",
    title: "Mayondo Wood & Furniture",
    description: "Inventory management tracking sales, orders, stock, and suppliers. Web site and web application.",
    tags: ["Inventory", "Sales", "Orders"],
    image: "/mayondo.png",
    filter: "Web Apps",
  },
];

const CATEGORY_COLORS = {
  Web: { bg: "#ede9fe", text: "#6d28d9" },
  Mobile: { bg: "#fce7f3", text: "#be185d" },
};

export default function ProFolioProjects() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filtered =
    activeFilter === "All Projects"
      ? PROJECTS
      : PROJECTS.filter((p) => p.filter === activeFilter);

  return (
    <div className="projects-root">
      {/* NAVBAR */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "#fff", borderBottom: "1.5px solid #f0f0f0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px", height: 60, display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
          <div style={{ display: "flex", gap: 28 }}>
            <a href="#home" className="nav-link">Home</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <section style={{ padding: "64px 0 32px" }}>
          <h1 style={{ fontSize: 44, fontWeight: 800, letterSpacing: -1, lineHeight: 1.1 }}>
            Selected <span style={{ color: "#6d28d9" }}>Projects</span>
          </h1>
          <p style={{ marginTop: 16, color: "#555", fontSize: 15.5, maxWidth: 540, lineHeight: 1.65 }}>
            A curated collection of my most impactful work across web development, mobile
            applications, and visual identity design. Each project represents a unique challenge solved
            through thoughtful architecture and design.
          </p>
        </section>

        {/* Filter Bar */}
        <div style={{ borderTop: "1.5px solid #f0f0f0", borderBottom: "1.5px solid #f0f0f0", padding: "14px 0", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: "#888" }}>
              <path d="M2 4h12M4 8h8M6 12h4" stroke="#888" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
{FILTERS.map((f) => (
               <button
                 key={f}
                 className={`filter-btn${activeFilter === f ? " active" : ""}`}
                 onClick={() => setActiveFilter(f)}
               >
                 {f === "Web Apps" && <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.3"/><path d="M1 6h10M6 1a8 8 0 010 10M6 1a8 8 0 000 10" stroke="currentColor" strokeWidth="1.3"/></svg>}
                 {f === "Mobile" && <svg width="10" height="12" viewBox="0 0 10 12" fill="none"><rect x="1" y="1" width="8" height="10" rx="2" stroke="currentColor" strokeWidth="1.3"/><circle cx="5" cy="9.5" r="0.7" fill="currentColor"/></svg>}
                 {f}
               </button>
             ))}
          </div>
          <span style={{ fontSize: 13, color: "#888", fontWeight: 500 }}>Showing {filtered.length} projects</span>
        </div>

        {/* Projects Grid */}
        <section style={{ padding: "40px 0 72px" }}>
          <div className="projects-grid">
{filtered.map((project) => {
               const catColor = CATEGORY_COLORS[project.category];
               const isMobile = project.category === "Mobile";
               return (
                 <div key={project.id} className="project-card">
                   <div className="projects-card-frame">
                     {isMobile ? <PhoneFrame src={project.image} alt={project.title} /> : <WebFrame src={project.image} alt={project.title} />}
                   </div>
                   <div className="card-body">
                     <div>
                       <span className="category-pill" style={{ background: catColor.bg, color: catColor.text }}>
                         {project.category}
                       </span>
                     </div>
                     <h3 style={{ fontWeight: 700, fontSize: 18, letterSpacing: -0.3 }}>{project.title}</h3>
                     <p style={{ fontSize: 13.5, color: "#666", lineHeight: 1.6 }}>{project.description}</p>
                     <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                       {project.tags.map((t) => (
                         <span key={t} className="tag-pill">{t}</span>
                       ))}
                     </div>
                     <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
                       <button className="btn-primary">
                         <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="#fff" strokeWidth="1.4"/><circle cx="7" cy="7" r="2" fill="#fff"/></svg>
                         Case Study
                       </button>
                       <button className="btn-outline">
                         <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 2h4v4H2zM8 2h4v4H8zM2 8h4v4H2zM8 8h4v4H8z" stroke="currentColor" strokeWidth="1.3" fill="none"/></svg>
                         Code
                       </button>
                     </div>
                   </div>
                 </div>
               );
             })}
          </div>
        </section>
      </main>

      {/* CTA SECTION */}
      <section style={{ background: "#fafafa", borderTop: "1.5px solid #f0f0f0", borderBottom: "1.5px solid #f0f0f0", padding: "72px 32px", textAlign: "center" }}>
        <p style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: 2, color: "#888", textTransform: "uppercase", marginBottom: 14 }}>Collaborate</p>
        <h2 style={{ fontSize: 38, fontWeight: 800, letterSpacing: -1, marginBottom: 18 }}>Have a project in mind?</h2>
        <p style={{ color: "#666", fontSize: 15.5, maxWidth: 480, margin: "0 auto 32px", lineHeight: 1.7 }}>
          I'm currently available for freelance opportunities or full-time roles. Whether
          you have a fully-fledged brief or just an initial spark, let's build something
          exceptional together.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", marginBottom: 40 }}>
          <button className="cta-btn-primary" onClick={() => window.location.hash = '#contact'}>Get in Touch</button>
          <button className="cta-btn-outline">View Resume</button>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 32 }}>
          {["TECHCORP", "DESIGN.STU", "APP.WIZ"].map((b) => (
            <span key={b} style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, color: "#bbb" }}>{b}</span>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#fff", padding: "56px 32px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, paddingBottom: 48 }}>
            {/* Brand */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                <span style={{ fontWeight: 700, fontSize: 15 }}>Kasande Emily</span>
              </div>
              <p style={{ fontSize: 13.5, color: "#666", lineHeight: 1.7, maxWidth: 220 }}>
                Showcasing expertise in digital product design and full-stack development. Building the web of tomorrow, today.
              </p>
<div style={{ display: "flex", gap: 8, marginTop: 18 }}>
                 {[
                   <svg key="b" width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="1" width="14" height="14" rx="3" stroke="#555" strokeWidth="1.4"/><path d="M5 8h6M8 5v6" stroke="#555" strokeWidth="1.4" strokeLinecap="round"/></svg>,
                   <svg key="g" width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="#555" strokeWidth="1.4"/><path d="M8 1.5C8 1.5 5 5 5 8s3 6.5 3 6.5" stroke="#555" strokeWidth="1.4"/></svg>,
                 ].map((icon, i) => (
                   <a key={i} href={i === 0 ? "https://github.com/Emilykasande" : "https://www.linkedin.com/in/kasande-emily-a21aa5373/"} target="_blank" rel="noopener noreferrer" className="social-icon" style={{ textDecoration: "none" }}>{icon}</a>
                 ))}
               </div>
            </div>

{/* Sitemap */}
            <div>
              <p style={{ fontWeight: 700, fontSize: 13.5, marginBottom: 16 }}>Sitemap</p>
              <p key="home" style={{ marginBottom: 10 }}><span className="footer-link" onClick={() => window.location.hash = '#home'}>Home</span></p>
              <p key="contact" style={{ marginBottom: 10 }}><span className="footer-link" onClick={() => window.location.hash = '#contact'}>Contact</span></p>
            </div>

{/* Contact */}
             <div>
               <p style={{ fontWeight: 700, fontSize: 13.5, marginBottom: 16 }}>Contact</p>
               <p style={{ fontSize: 13, color: "#555", marginBottom: 8, display: "flex", alignItems: "center", gap: 6 }}>
                 <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><rect x="1" y="3" width="11" height="7" rx="1.5" stroke="#888" strokeWidth="1.2"/><path d="M1 4l5.5 3.5L12 4" stroke="#888" strokeWidth="1.2"/></svg>
                 emilykasande1@gmail.com
               </p>
               <p style={{ fontSize: 13, color: "#555", display: "flex", alignItems: "center", gap: 6 }}>
                 <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="6.5" cy="5.5" r="2.2" stroke="#888" strokeWidth="1.2"/><path d="M6.5 1C4 1 2 3 2 5.5 2 9 6.5 12 6.5 12S11 9 11 5.5C11 3 9 1 6.5 1z" stroke="#888" strokeWidth="1.2"/></svg>
                 Kampala Mukono, Uganda
               </p>
             </div>

{/* Resources */}
             <div>
               <p style={{ fontWeight: 700, fontSize: 13.5, marginBottom: 16 }}>Resources</p>
               <p style={{ fontSize: 13, color: "#555", display: "flex", alignItems: "center", gap: 6, cursor: "pointer" }}>
                 <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><rect x="2" y="1" width="9" height="11" rx="1.5" stroke="#888" strokeWidth="1.2"/><path d="M4 4h5M4 6.5h5M4 9h3" stroke="#888" strokeWidth="1.2" strokeLinecap="round"/></svg>
                 <a href="/kasande-emily-cv.pdf" download style={{ color: "#555", textDecoration: "none" }}>Download CV</a>
               </p>
             </div>
          </div>

          <hr className="divider" />
          <div style={{ padding: "20px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 12.5, color: "#aaa" }}>© 2026 ProFolio. All rights reserved.</span>
            <div style={{ display: "flex", gap: 20 }}>
              <span className="footer-link" style={{ fontSize: 12.5 }}>Privacy Policy</span>
              <span className="footer-link" style={{ fontSize: 12.5 }}>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}