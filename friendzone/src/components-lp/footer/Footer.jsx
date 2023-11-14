import FooterItems from "./FooterItems";
import { LEGAL, CAREERS, SUPPORT, FAQ, ICONS } from "./FooterOptions";
import Logo from "../logo/Logo";
import SocialIcons from "../social-icons/SocialIcons";
import logoImg from "../../assets/images/brand/logo-ice-cream-and-name-row.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[ffffff19] py-7"></div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-10 sm:px-8 px-5 py-16">
        <span className="w-30 p-4">
          <Logo logo={logoImg} />
        </span>
        <FooterItems Links={LEGAL} title="LEGAL" />
        <FooterItems Links={CAREERS} title="CARRERS" />
        <FooterItems Links={SUPPORT} title="SUPPORT" />
        <FooterItems Links={FAQ} title="FAQ" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
        <span> © 2023 Team 2. All rights reserved. </span>
        <span> Terms | Privacy Policy </span>
        <SocialIcons icons={ICONS} />
      </div>
    </footer>
  );
};

export default Footer;
