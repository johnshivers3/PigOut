import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <Link to={{ pathname: `https://github.com/johnshivers3/PigOut-Full-Stack-Yelp-Clone` }} target="_blank">
        <h3>GitHub Repository</h3>
        {/* <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="john-shivers-99ab30203" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/john-shivers-99ab30203?trk=profile-badge">John Shivers</a></div> */}

      </Link>
    </div>
  );
};

export default Footer;
