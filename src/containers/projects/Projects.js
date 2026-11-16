import React, {useState, useEffect} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import {openSource, socialMediaLinks} from "../../portfolio";

export default function Projects() {
  const [repo, setRepo] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    if (typeof fetch !== "function") {
      setHasError(true);
      return () => {
        isMounted = false;
      };
    }

    fetch("./profile.json")
      .then(result => {
        if (result.ok) {
          return result.json();
        }
        throw new Error(`HTTP ${result.status}`);
      })
      .then(response => {
        if (isMounted && response?.data?.user?.pinnedItems?.edges) {
          setRepo(response.data.user.pinnedItems.edges);
        }
      })
      .catch(() => {
        if (isMounted) {
          setHasError(true);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (!openSource.display || hasError || !Array.isArray(repo) || repo.length === 0) {
    return null;
  }

  return (
    <section className="section-block" id="opensource">
      <div className="projects-header-row">
        <div className="section-header projects-section-header">
          <span className="section-eyebrow">02 / Selected Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Pinned repositories from GitHub showcasing backend APIs, fullstack web
            systems, and mobile applications.
          </p>
        </div>

        {socialMediaLinks.github && (
          <Button
            text="All Repositories ↗"
            href={socialMediaLinks.github}
            newTab={true}
            variant="secondary"
          />
        )}
      </div>

      <div className="projects-bento-grid">
        {repo.map((item, i) => {
          if (!item || !item.node) {
            return null;
          }
          return <GithubRepoCard key={item.node.id || i} repo={item} />;
        })}
      </div>
    </section>
  );
}
