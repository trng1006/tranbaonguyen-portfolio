import React, {useState} from "react";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting, contactInfo} from "../../portfolio";

export default function Greeting() {
  const [copied, setCopied] = useState(false);
  const [avatarFailed, setAvatarFailed] = useState(false);

  if (!greeting.displayGreeting) {
    return null;
  }

  const handleCopyEmail = () => {
    const email = contactInfo.email_address;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(email)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(() => {
          window.location.href = `mailto:${email}`;
        });
    } else {
      window.location.href = `mailto:${email}`;
    }
  };

  const card = greeting.profileCard || {};

  return (
    <section className="hero-section" id="greeting">
      <div className="hero-grid">
        <div className="hero-content">
          {greeting.availabilityBadge && (
            <div className="hero-status-pill">
              <span className="hero-status-dot" aria-hidden="true"></span>
              <span>{greeting.availabilityBadge}</span>
            </div>
          )}

          <h1 className="hero-title">{greeting.title}</h1>
          {greeting.roleTitle && (
            <p className="hero-role">{greeting.roleTitle}</p>
          )}
          <p className="hero-subtitle">{greeting.subTitle}</p>

          <div className="hero-actions">
            <Button text="View Projects" href="#opensource" variant="primary" />
            <Button
              text={copied ? "Email Copied" : "Copy Email"}
              onClick={handleCopyEmail}
              variant="secondary"
            />
            {greeting.resumeLink && (
              <Button
                text="Resume"
                href={greeting.resumeLink}
                newTab={true}
                variant="secondary"
              />
            )}
          </div>

          <div className="hero-social">
            <SocialMedia />
          </div>
        </div>

        <aside className="bento-card hero-profile-card" aria-label="Developer summary">
          <div className="hero-profile-card__top">
            {!avatarFailed && card.avatarUrl ? (
              <img
                src={card.avatarUrl}
                alt={greeting.username}
                className="hero-profile-card__avatar"
                onError={() => setAvatarFailed(true)}
              />
            ) : (
              <div className="hero-profile-card__avatar-fallback" aria-hidden="true">
                TN
              </div>
            )}
            <div className="hero-profile-card__identity">
              <span className="hero-profile-card__name">{greeting.username}</span>
              <span className="hero-profile-card__handle">{card.handle}</span>
            </div>
          </div>

          <dl className="hero-profile-card__meta">
            <div className="hero-profile-card__meta-row">
              <dt>Education</dt>
              <dd>{card.university}</dd>
            </div>
            <div className="hero-profile-card__meta-row">
              <dt>Academic</dt>
              <dd className="mono">{card.gpa}</dd>
            </div>
            <div className="hero-profile-card__meta-row">
              <dt>Focus</dt>
              <dd>{card.focus}</dd>
            </div>
            <div className="hero-profile-card__meta-row">
              <dt>Location</dt>
              <dd>{card.location}</dd>
            </div>
          </dl>

          {card.coreStack && card.coreStack.length > 0 && (
            <div className="hero-profile-card__stack">
              <span className="hero-profile-card__stack-label">Core Stack</span>
              <div className="hero-profile-card__chips">
                {card.coreStack.map(tech => (
                  <span key={tech} className="tech-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}
