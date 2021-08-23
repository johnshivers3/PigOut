import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <h3>Thanks for stopping by! Check out my other apps at</h3>
      <h3>
        <Link
          to={{ pathname: `https://www.ShiversDevelopment.com` }}
          target="_blank"
        >
          ShiversDevelopment.com
        </Link>
      </h3>
    </div>
  );
};

export default Footer;
