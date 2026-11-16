import React from "react";
import "./Footer.scss";
import {greeting, socialMediaLinks} from "../../portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__copy">
          &copy; {year} {greeting.username}
        </p>
        <div className="site-footer__links">
          {socialMediaLinks.github && (
            <a
              href={socialMediaLinks.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
          {socialMediaLinks.gmail && (
            <a href={`mailto:${socialMediaLinks.gmail}`}>Email</a>
          )}
        </div>
      </div>
    </footer>
  );
}
