import React from "react";
import "./EducationCard.scss";

export default function EducationCard({school}) {
  return (
    <article className="bento-card education-bento-card">
      <div className="education-bento-card__header">
        <div className="education-bento-card__brand">
          {school.logo && (
            <img
              className="education-bento-card__logo"
              src={school.logo}
              alt={school.schoolName}
            />
          )}
          <div>
            <h3 className="education-bento-card__school">
              {school.schoolName}
            </h3>
            <p className="education-bento-card__degree">{school.subHeader}</p>
          </div>
        </div>

        <div className="education-bento-card__badges">
          {school.duration && (
            <span className="edu-badge mono">{school.duration}</span>
          )}
          {school.gpa && (
            <span className="edu-badge edu-badge--accent mono">
              {school.gpa}
            </span>
          )}
        </div>
      </div>

      {school.desc && <p className="education-bento-card__desc">{school.desc}</p>}

      {school.descBullets && school.descBullets.length > 0 && (
        <ul className="education-bento-card__bullets">
          {school.descBullets.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
