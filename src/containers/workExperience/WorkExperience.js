import React from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";

export default function WorkExperience() {
  if (!workExperiences.display) {
    return null;
  }

  return (
    <section className="section-block" id="experience">
      <div className="section-header">
        <span className="section-eyebrow">04 / Background &amp; Soft Skills</span>
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          Part-time roles that strengthened clear communication, problem-solving
          patience, and teamwork under pressure.
        </p>
      </div>

      <div className="experience-bento-grid">
        {workExperiences.experience.map((card, i) => (
          <ExperienceCard key={i} cardInfo={card} />
        ))}
      </div>
    </section>
  );
}
