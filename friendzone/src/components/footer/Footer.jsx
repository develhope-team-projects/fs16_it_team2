import FooterItems from "./FooterItems";
import { LEGAL, CAREERS, SUPPORT, FAQ, ICONS } from "./FooterOptions";
import Logo from "../logo/Logo";
import SocialIcons from "../socialIcons/SocialIcons";
import logoImg from "../../assets/images/brand/logo-ice-cream-and-name-row.png";

const Footer = () => {
  return (
    <footer className="text-white bg-gray-900">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[ffffff19] py-7"></div>
      <div className="grid grid-cols-1 gap-10 px-5 py-16 sm:grid-cols-3 lg:grid-cols-5 sm:px-8">
        <span className="p-4 w-30">
          <Logo logo={logoImg} />
        </span>
        <FooterItems Links={LEGAL} title="LEGAL" />
        <FooterItems Links={CAREERS} title="CARRERS" />
        <FooterItems Links={SUPPORT} title="SUPPORT" />
        <FooterItems Links={FAQ} title="FAQ" />
      </div>
      <div className="grid grid-cols-1 gap-10 pt-2 pb-8 text-sm text-center text-gray-400 sm:grid-cols-2 lg:grid-cols-3">
        <span> © 2023 Team 2. All rights reserved. </span>
        <span> Terms | Privacy Policy </span>
        <SocialIcons icons={ICONS} />
      </div>
    </footer>
  );
};

export default Footer;
