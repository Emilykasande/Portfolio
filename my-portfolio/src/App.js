import { useState, useEffect } from "react";
import Home from "./components/Home";
import ContactPage from "./components/ContactPage";
import ProFolioProjects from "./components/Projects";
import "./components/Home.css";
import "./components/ContactPage.css";
import "./components/Projects.css";

export default function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1).toLowerCase();
      if (hash === "contact") {
        setPage("contact");
      } else if (hash === "projects") {
        setPage("projects");
      } else {
        setPage("home");
      }
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <>
      {page === "contact" ? <ContactPage /> : page === "projects" ? <ProFolioProjects /> : <Home />}
    </>
  );
}