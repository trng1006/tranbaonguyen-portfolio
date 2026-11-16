import React from "react";
import "./ExperienceCard.scss";

function ExperienceIcon({iconType}) {
  if (iconType === "tutor") {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    );
  }
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export default function ExperienceCard({cardInfo}) {
  return (
    <article className="bento-card experience-bento-card">
      <div className="experience-bento-card__top">
        <div className="experience-bento-card__role-group">
          <div className="experience-bento-card__icon">
            <ExperienceIcon iconType={cardInfo.iconType} />
          </div>
          <div>
            <h3 className="experience-bento-card__role">{cardInfo.role}</h3>
            <p className="experience-bento-card__company">{cardInfo.company}</p>
          </div>
        </div>
        {cardInfo.date && (
          <span className="experience-date-pill mono">{cardInfo.date}</span>
        )}
      </div>

      <p className="experience-bento-card__desc">{cardInfo.desc}</p>

      {cardInfo.descBullets && cardInfo.descBullets.length > 0 && (
        <ul className="experience-bento-card__bullets">
          {cardInfo.descBullets.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
