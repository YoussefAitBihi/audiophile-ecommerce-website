import FacebookIcon from "@/assets/icons/Facebook";
import InstagramIcon from "@/assets/icons/Instagram";
import TwitterIcon from "@/assets/icons/Twitter";
import { Link } from "react-router-dom";

const SocialMediaLinks = () => {
  return (
    <ul className="social-media" role="list">
      <li>
        <Link
          to="https://www.facebook.com/youssef.aitbihi.581/"
          className="social-media__link"
          target="_blank"
        >
          <span className="visually-hidden">Facebook</span>
          <FacebookIcon />
        </Link>
      </li>
      <li>
        <Link to="https://twitter.com/ayt_bihi" className="social-media__link" target="_blank">
          <span className="visually-hidden">Twitter</span>
          <TwitterIcon />
        </Link>
      </li>
      <li>
        <Link
          to="https://www.instagram.com/youssefaitbihi2022/"
          className="social-media__link"
          target="_blank"
        >
          <span className="visually-hidden">Instagram</span>
          <InstagramIcon />
        </Link>
      </li>
    </ul>
  );
};

export default SocialMediaLinks;
