import heroImg from "../../assets/media-lp/hero-img.png";
import Navbar from "../navbar/Navbar";

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-70"
        aria-hidden="true"
      ></div>
      <img
        className="object-cover w-full h-full"
        src={heroImg}
        alt="Hero Background"
      />
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white text-4xl z-10">
        <h1>Swipe smiles, make friends miles! </h1>
        <div className="flex items-center">
          <h2>Join our community, before your ice cream melts down! </h2>{" "}
          <span className="hover:text-[#e058cc]">
            <ion-icon name="ice-cream-outline"></ion-icon>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
