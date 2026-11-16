import React from "react";
import "./GithubRepoCard.scss";
import {formatFileSizeDisplay} from "../../utils";
import {projectMeta} from "../../portfolio";

function findProjectMeta(name) {
  if (!projectMeta || !name) return {};
  if (projectMeta[name]) return projectMeta[name];
  const lower = name.toLowerCase();
  const matchedKey = Object.keys(projectMeta).find(
    key => key.toLowerCase() === lower
  );
  return matchedKey ? projectMeta[matchedKey] : {};
}

export default function GithubRepoCard({repo}) {
  const node = repo.node;
  const meta = findProjectMeta(node.name);
  const category = meta.category || "Open Source";
  const description = meta.summary || node.description;
  const stack = meta.stack || [];

  return (
    <a
      href={node.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`bento-card bento-card-interactive repo-bento-card ${
        meta.featured ? "is-featured" : ""
      }`}
    >
      <div className="repo-bento-card__top">
        <span className="repo-category-pill">{category}</span>
        <span className="repo-external-arrow" aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17 17 7M7 7h10v10" />
          </svg>
        </span>
      </div>

      <div className="repo-bento-card__body">
        <h3 className="repo-bento-card__title">{node.name}</h3>
        <p className="repo-bento-card__desc">{description}</p>
      </div>

      {stack.length > 0 && (
        <div className="repo-bento-card__tags">
          {stack.map(tag => (
            <span key={tag} className="repo-tag">
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="repo-bento-card__footer">
        <div className="repo-bento-card__stats">
          {node.primaryLanguage && (
            <span className="repo-stat-item">
              <span
                className="repo-lang-dot"
                style={{backgroundColor: node.primaryLanguage.color}}
              ></span>
              <span>{node.primaryLanguage.name}</span>
            </span>
          )}
          <span className="repo-stat-item" title="Stars">
            <svg
              width="13"
              height="13"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
            </svg>
            <span>{node.stargazers ? node.stargazers.totalCount : 0}</span>
          </span>
          <span className="repo-stat-item" title="Forks">
            <svg
              width="13"
              height="13"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
            </svg>
            <span>{node.forkCount || 0}</span>
          </span>
        </div>
        <span className="repo-size mono">
          {formatFileSizeDisplay(node.diskUsage)}
        </span>
      </div>
    </a>
  );
}
