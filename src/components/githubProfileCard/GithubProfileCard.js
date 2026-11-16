import React, {useState} from "react";
import "./GithubProfileCard.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {contactInfo, isHireable} from "../../portfolio";

export default function GithubProfileCard({prof}) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(contactInfo.email_address)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(() => {});
    }
  };

  return (
    <section className="section-block" id="contact">
      <div className="bento-card contact-bento-card">
        <div className="contact-bento-card__content">
          <div className="section-header contact-bento-card__header">
            <span className="section-eyebrow">05 / Contact</span>
            <h2 className="section-title">{contactInfo.title}</h2>
            <p className="section-subtitle">{contactInfo.subtitle}</p>
          </div>

          <div className="contact-bento-card__details">
            <a
              className="contact-detail-chip"
              href={`mailto:${contactInfo.email_address}`}
            >
              <i className="fas fa-envelope" aria-hidden="true"></i>
              <span className="mono">{contactInfo.email_address}</span>
            </a>

            {contactInfo.number && (
              <a
                className="contact-detail-chip"
                href={`tel:${contactInfo.number}`}
              >
                <i className="fas fa-phone-alt" aria-hidden="true"></i>
                <span className="mono">{contactInfo.number}</span>
              </a>
            )}

            {prof && prof.location && (
              <span className="contact-detail-chip is-static">
                <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                <span>{prof.location}</span>
              </span>
            )}
          </div>

          <div className="contact-bento-card__actions">
            <Button
              text="Send Email"
              href={`mailto:${contactInfo.email_address}`}
              variant="primary"
            />
            <Button
              text={copied ? "Email Copied" : "Copy Email"}
              onClick={handleCopyEmail}
              variant="secondary"
            />
            <SocialMedia />
          </div>
        </div>

        <div className="contact-bento-card__aside">
          {prof && prof.avatarUrl && (
            <img
              src={prof.avatarUrl}
              alt={prof.name || "Tran Bao Nguyen"}
              className="contact-bento-card__avatar"
            />
          )}
          <div className="contact-status-badge">
            <span className="contact-status-dot" aria-hidden="true"></span>
            <span>
              Open for Internship: {isHireable ? "Yes" : "Not currently"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
