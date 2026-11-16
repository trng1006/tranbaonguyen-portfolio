import React from "react";
import GithubProfileCard from "../../components/githubProfileCard/GithubProfileCard";
import {greeting} from "../../portfolio";

export default function Contact() {
  const fallbackProf = {
    name: greeting.username,
    avatarUrl: greeting.profileCard ? greeting.profileCard.avatarUrl : "",
    location: greeting.profileCard ? greeting.profileCard.location : ""
  };

  return <GithubProfileCard prof={fallbackProf} />;
}
