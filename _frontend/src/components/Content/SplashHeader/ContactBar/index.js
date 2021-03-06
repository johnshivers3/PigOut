import React from "react";
import { Link } from "react-router-dom";
import GitHubLogo from "./GitHubLogo";
import LinkedInLogo from "./LinkedInLogo";
import PortfolioLogo from "./PortfolioLogo";
import ResumeLogo from "./ResumeLogo";
import "./ContactBar.css";

export const ContactBar = () => {
  return (
    <div className="splash-contact-nav-bar">
      <div>
        <Link
          to={{
            pathname: `https://github.com/johnshivers3/PigOut-Full-Stack-Yelp-Clone`,
          }}
          target="_blank"
        >
          <GitHubLogo />
        </Link>
        GitHub
      </div>
      <div>
        <Link
          to={{
            pathname: `https://www.linkedin.com/in/john-shivers3/`,
          }}
          target="_blank"
        >
          <LinkedInLogo />
        </Link>
        LinkedIn
      </div>
      <div>
        <Link
          to={{
            pathname: `https://www.shiversdevelopment.com`,
          }}
          target="_blank"
        >
          <PortfolioLogo />
        </Link>
        Portfolio
      </div>
      <div>
        <Link
          to={{
            pathname: `https://docs.google.com/document/d/1ahgMIRC2-iVPO3-1rTf82BO4n7chhNh7BecpZAXa174/edit?usp=sharing`,
          }}
          target="_blank"
        >
          <ResumeLogo />
        </Link>
        Resume
      </div>
    </div>
  );
};
