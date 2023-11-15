import heroImg from "../../assets/images/landingPage/hero-img.png";
import Navbar from "../navbar/Navbar";

const HeroSection = () => {
  return (
    <div className="relative h-screen custom-box-shadow">
      <div
        className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-70"
        aria-hidden="true"
      ></div>
      <img
        className="object-cover w-full h-full"
        src={heroImg}
        alt="Hero Background"
      />
      <div className="absolute top-0 left-0 z-20 w-full">
        <Navbar />
      </div>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-4xl text-center text-white">
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
