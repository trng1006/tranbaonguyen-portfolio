import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  const groups = skillsSection.skillGroups;

  if (groups && groups.length > 0) {
    return (
      <div className="stack-groups-grid">
        {groups.map(group => (
          <div key={group.category} className="bento-card stack-group-card">
            <h3 className="stack-group-card__title">{group.category}</h3>
            <ul className="stack-group-card__list">
              {group.items.map(item => (
                <li key={item.skillName} className="stack-pill">
                  <i className={item.fontAwesomeClassname} aria-hidden="true"></i>
                  <span>{item.skillName}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="bento-card stack-group-card">
      <ul className="stack-group-card__list">
        {skillsSection.softwareSkills.map((skills, i) => (
          <li key={i} className="stack-pill" name={skills.skillName}>
            <i className={skills.fontAwesomeClassname} aria-hidden="true"></i>
            <span>{skills.skillName}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
