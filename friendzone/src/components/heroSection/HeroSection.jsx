import { IoIceCream } from "react-icons/io5";
import Navbar from "../navbar/Navbar";
import DinamicColorLight from "../dinamicColorIce/DinamicColorLight";
import heroImg from "../../assets/images/landingPage/hero-img.png";

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-70" aria-hidden="true"></div>

      {/* Hero image */}
      <img className="object-cover w-full h-full" src={heroImg} alt="Hero Background" />

      {/* Navbar */}
      <div className="absolute top-0 left-0 z-20 w-full">
        <Navbar />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
        <DinamicColorLight>
          <h1 className="text-4xl md:text-6xl lg:text-7xl">Swipe smiles, make friends miles! </h1>
        </DinamicColorLight>

        <div className="flex flex-col items-center md:flex-row md:space-x-4 mt-4">
          <DinamicColorLight>
            <h2 className="flex text-lg md:text-5xl">
              Join our community, before your ice cream melts down!
              <span className="p-2 text-xl md:text-3xl">{<IoIceCream />}</span>
            </h2>
          </DinamicColorLight>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
