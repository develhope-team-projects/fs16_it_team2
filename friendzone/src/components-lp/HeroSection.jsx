import heroImg from "../assets/media-lp/hero-img.png";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <Navbar />
      <div className="relative text-left text-4xl text-white p-40">
        <h1>Swipe smiles, make friends miles! </h1>
        <h2>Join our cummunity, before your ice cream melts down! </h2>
        <i className=" hover:text-[#e058cc]">
          <ion-icon name="ice-cream-outline"></ion-icon>
        </i>
      </div>
    </div>
  );
};

export default HeroSection;
