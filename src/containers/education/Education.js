import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";

export default function Education() {
  if (!educationInfo.display) {
    return null;
  }

  return (
    <section className="section-block" id="education">
      <div className="section-header">
        <span className="section-eyebrow">03 / Academic Background</span>
        <h2 className="section-title">Education</h2>
      </div>
      <div className="education-card-container">
        {educationInfo.schools.map((school, index) => (
          <EducationCard key={index} school={school} />
        ))}
      </div>
    </section>
  );
}
