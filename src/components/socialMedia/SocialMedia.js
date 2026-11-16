import React from "react";
import "./SocialMedia.scss";
import {socialMediaLinks} from "../../portfolio";

export default function SocialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }

  const items = [
    {
      key: "github",
      href: socialMediaLinks.github,
      label: "GitHub",
      iconClass: "fab fa-github",
      text: "GitHub"
    },
    {
      key: "linkedin",
      href: socialMediaLinks.linkedin,
      label: "LinkedIn",
      iconClass: "fab fa-linkedin-in",
      text: "LinkedIn"
    },
    {
      key: "gmail",
      href: socialMediaLinks.gmail ? `mailto:${socialMediaLinks.gmail}` : "",
      label: "Email",
      iconClass: "fas fa-envelope",
      text: "Email"
    },
    {
      key: "gitlab",
      href: socialMediaLinks.gitlab,
      label: "GitLab",
      iconClass: "fab fa-gitlab",
      text: "GitLab"
    },
    {
      key: "twitter",
      href: socialMediaLinks.twitter,
      label: "Twitter",
      iconClass: "fab fa-twitter",
      text: "Twitter"
    }
  ].filter(item => Boolean(item.href));

  return (
    <div className="social-media-div">
      {items.map(item => (
        <a
          key={item.key}
          href={item.href}
          className="social-pill-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
        >
          <i className={item.iconClass} aria-hidden="true"></i>
          <span>{item.text}</span>
        </a>
      ))}
    </div>
  );
}
