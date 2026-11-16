import React, {useState} from "react";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  educationInfo
} from "../../portfolio";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    skillsSection.display && {label: "Stack", href: "#skills"},
    openSource.display && {label: "Projects", href: "#opensource"},
    educationInfo.display && {label: "Education", href: "#education"},
    workExperiences.display && {label: "Experience", href: "#experience"},
    {label: "Contact", href: "#contact"}
  ].filter(Boolean);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="#greeting" className="site-header__logo">
          <span className="site-header__logo-bracket">&lt;</span>
          <span className="site-header__logo-name">{greeting.username}</span>
          <span className="site-header__logo-bracket">/&gt;</span>
        </a>

        <div className="site-header__right">
          <nav
            className={`site-header__nav ${menuOpen ? "is-open" : ""}`}
            aria-label="Primary navigation"
          >
            <ul>
              {navItems.map(item => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-header__actions">
            <ToggleSwitch />
            <button
              type="button"
              className="site-header__menu-btn"
              onClick={() => setMenuOpen(prev => !prev)}
              aria-expanded={menuOpen}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
