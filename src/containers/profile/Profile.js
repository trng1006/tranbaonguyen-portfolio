import React, {useState, useEffect} from "react";
import {openSource} from "../../portfolio";
import Contact from "../contact/Contact";
import GithubProfileCard from "../../components/githubProfileCard/GithubProfileCard";

export default function Profile() {
  const [prof, setProf] = useState(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    if (
      openSource.showGithubProfile !== "true" ||
      typeof fetch !== "function"
    ) {
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
        if (isMounted && response?.data?.user) {
          setProf(response.data.user);
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

  if (openSource.display && openSource.showGithubProfile === "true" && !hasError && prof) {
    return <GithubProfileCard prof={prof} />;
  }

  return <Contact />;
}
