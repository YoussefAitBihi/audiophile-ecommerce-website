import Logo from "@/components/UI/Links/Logo";
import PrimaryNavigation from "../PrimaryNavigation";
import SocialMediaLinks from "@/components/UI/SocialMediaLinks";

const PrimaryFooter = () => {
  const actualYear = new Date().getFullYear();

  return (
    <footer className="primary-footer">
      <div className="container">
        <div className="primary-footer__wrapper">
          <Logo className="primary-footer__logo" />
          <PrimaryNavigation />
          <p className="primary-footer__description">
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of
            music lovers and sound specialists who are devoted to helping you get the most out of
            personal audio. Come and visit our demo facility - we’re open 7 days a week.
          </p>
          <p className="primary-footer__copyright">Copyright {actualYear}. All Rights Reserved</p>
          <SocialMediaLinks />
        </div>
      </div>
    </footer>
  );
};

export default PrimaryFooter;
