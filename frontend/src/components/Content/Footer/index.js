import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <Link to={{ pathname: `https://github.com/johnshivers3/PigOut-Full-Stack-Yelp-Clone` }} target="_blank">
        <h3>GitHub Repository</h3>
      </Link>
    </div>
  );
};

export default Footer;
