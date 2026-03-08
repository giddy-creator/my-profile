import React from "react";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiPostgresql, SiExpress } from "react-icons/si";

function Projects() {
  return (

    <section id="projects" className="projects section">
      <div className="container">
        <h2>Projects</h2>

        <div className="project-grid">

          {/* Project 1 */}
          <div className="project-card">
            <h3>SDataCare</h3>

            <p>
              A web application for a data analysis company that presents
              analytics services and insights in a modern interface.
            </p>

            <div className="tech-stack">
              <FaReact title="React"/>
              <FaHtml5 title="HTML"/>
              <FaCss3Alt title="CSS"/>
            </div>

            <a
              href="https://sdatacare.com"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Visit Site
            </a>
          </div>


          {/* Project 2 */}
          <div className="project-card">
            <h3>Hotel Premium</h3>

            <p>
              A hotel web application where users can browse meals,
              order food and add items to a cart through a dynamic menu.
            </p>

            <div className="tech-stack">
              <FaReact title="React"/>
              <FaHtml5 title="HTML"/>
              <FaCss3Alt title="CSS"/>
              <SiExpress title="Express"/>
              <SiPostgresql title="PostgreSQL"/>
            </div>

            <a href="https://github.com/giddy-creator/Hotel-Premium" className="project-link">
              View Project
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;