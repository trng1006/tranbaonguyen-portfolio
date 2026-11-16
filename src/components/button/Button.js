import React from "react";
import "./Button.scss";

export default function Button({
  text,
  className = "",
  href,
  newTab = false,
  variant = "primary",
  onClick
}) {
  const classes = `ui-button ui-button--${variant} ${className}`.trim();

  if (onClick && !href) {
    return (
      <button type="button" className={classes} onClick={onClick}>
        {text}
      </button>
    );
  }

  return (
    <a
      className={classes}
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      onClick={onClick}
    >
      {text}
    </a>
  );
}
