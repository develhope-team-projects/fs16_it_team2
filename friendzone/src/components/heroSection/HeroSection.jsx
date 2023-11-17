import heroImg from "../../assets/images/landingPage/hero-img.png";
import Navbar from "../navbar/Navbar";
import DinamicColor from "../dinamicColorIce/DinamicColor";
import { IoIceCream } from "react-icons/io5";
import DinamicColorLight from "../dinamicColorIce/DinamicColorLight";

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
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
        <DinamicColorLight>
          <h1 className="text-7xl">Swipe smiles, make friends miles! </h1>
        </DinamicColorLight>

        <div className="flex items-center">
          <DinamicColorLight>
            <h2 className="text-3xl">
              Join our community, before your ice cream melts down! <span> {<IoIceCream />}</span>
            </h2>
          </DinamicColorLight>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
