import React from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {skillsSection} from "../../portfolio";

function CapabilityIcon({id}) {
  if (id === "backend") {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="3" width="20" height="7" rx="2" />
        <rect x="2" y="14" width="20" height="7" rx="2" />
        <line x1="6" y1="6.5" x2="6.01" y2="6.5" />
        <line x1="6" y1="17.5" x2="6.01" y2="17.5" />
      </svg>
    );
  }
  if (id === "frontend") {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 20h8M12 18v2" />
      </svg>
    );
  }
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
      <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
    </svg>
  );
}

export default function Skills() {
  if (!skillsSection.display) {
    return null;
  }

  return (
    <section className="section-block" id="skills">
      <div className="section-header">
        <span className="section-eyebrow">01 / Stack &amp; Capabilities</span>
        <h2 className="section-title">{skillsSection.title}</h2>
        <p className="section-subtitle">{skillsSection.subTitle}</p>
      </div>

      {skillsSection.capabilities && skillsSection.capabilities.length > 0 && (
        <div className="capabilities-grid">
          {skillsSection.capabilities.map(item => (
            <article key={item.id} className="bento-card capability-card">
              <div className="capability-card__icon">
                <CapabilityIcon id={item.id} />
              </div>
              <h3 className="capability-card__title">{item.title}</h3>
              <p className="capability-card__desc">{item.description}</p>
            </article>
          ))}
        </div>
      )}

      <SoftwareSkill />
    </section>
  );
}
