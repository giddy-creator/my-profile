import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-line"></div>

      <p>Built by Gideon • © {new Date().getFullYear()}</p>

      <div className="footer-links">
        <a href="https://github.com/giddy-creator">GitHub</a>
        <a href="#">LinkedIn</a>
      </div>
    </footer>
  );
}

export default Footer;