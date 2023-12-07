import { Link } from "react-router-dom";
import CircleComponent from "../../components/animationCircles/CircleComponent";
import imgele1 from "../../assets/images/landingPage/about-us/eleonora-photo.jpeg";
import imgele2 from "../../assets/images/landingPage/about-us/crossfit.png";
import imgele3 from "../../assets/images/landingPage/about-us/reggeaton.png";
import imgMiriana1 from "../../assets/images/landingPage/about-us/miriana.jpg";
import imgMiriana2 from "../../assets/images/landingPage/about-us/japan.png";
import imgMiriana3 from "../../assets/images/landingPage/about-us/books.png";
import imgLuigi1 from "../../assets/images/landingPage/about-us/profile_pic.jpg";
import imgLuigi2 from "../../assets/images/landingPage/about-us/hardware.png";
import imgLuigi3 from "../../assets/images/landingPage/about-us/electronicmusic.png";
import imgDesiré1 from "../../assets/images/landingPage/about-us/desiré.png";
import imgDesiré2 from "../../assets/images/landingPage/about-us/dog.png";
import imgDesiré3 from "../../assets/images/landingPage/about-us/orologio.png";
import imgMonica1 from "../../assets/images/landingPage/about-us/monica.jpg";
import imgMonica2 from "../../assets/images/landingPage/about-us/monicapesi.png";
import imgMonica3 from "../../assets/images/landingPage/about-us/pittura.png";
import Switcher from "../../components/darkMode/Switcher";
import iceCream from "../../assets/images/icecreams/2icecrm.png";
import { useEffect, useState } from "react";
import background from "../../assets/videos/landingPage/aboutus2.mp4";
import { IoIceCream } from "react-icons/io5";
import DinamicColor from "../../components/dinamicColorIce/DinamicColor";

const team2 = [
  {
    name: "Desiré Passalacqua",
    role: "Junior Full-Stack Developer",
    iceCream: "Cream!",
    passions: "Loving dogs, and traditional wristwatches",
    images: [imgDesiré1, imgDesiré2, imgDesiré3],
  },
  {
    name: "Eleonora Melodia",
    role: "Junior Full-Stack Developer",
    iceCream: "Pistachio!",
    passions: "Crossfit and dancing reggeaton",
    images: [imgele1, imgele2, imgele3],
  },
  {
    name: "Miriana Falcone",
    role: "Junior Full-Stack Developer",
    iceCream: "Vanilla!",
    passions: "Books and Japan world!",
    images: [imgMiriana1, imgMiriana2, imgMiriana3],
  },
  {
    name: "Monica Lucaci ",
    role: "Junior Full-Stack Developer",
    iceCream: "Pink grapefruit!",
    passions: "Weight lifting and paint pictures",
    images: [imgMonica1, imgMonica2, imgMonica3],
  },
  {
    name: "Luigi Rauso ",
    role: "Junior Full-Stack Developer",
    iceCream: "Chocolate chip!",
    passions: "hardware fanatic, composing music",
    images: [imgLuigi1, imgLuigi2, imgLuigi3],
  },
];

const AboutUsPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setImageIndex(0); // Reset image index when leaving
  };

  useEffect(() => {
    let interval;

    // Change images only if hovered and there are more than one image
    if (hoveredIndex !== null && team2[hoveredIndex].images.length > 1) {
      interval = setInterval(() => {
        setImageIndex(
          (prevIndex) => (prevIndex + 1) % team2[hoveredIndex].images.length
        );
      }, 800);
    }

    return () => {
      clearInterval(interval);
    };
  }, [hoveredIndex]);

  return (
    <div className="h-screen relative">
      <div
        className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-100 h-[35vh]"
        aria-hidden="true"
      ></div>
      <video autoPlay loop muted className="object-cover w-full h-[35vh]">
        <source src={background} type="video/mp4" />
        Il tuo browser potrebbe non supportare la riproduzione di video.
      </video>

      <CircleComponent />

      <div className="container font-merienda mx-auto">
        <ul className="absolute inline-flex mt-2 gap-4 left-10 top-2 z-10 ">
          <li>
            <Link
              to="/"
              className="flex m-2 items-center text-purple-500 hover:underline"
            >
              <ion-icon name="home" className="mr-2"></ion-icon>
              Back to Home
            </Link>
          </li>
          <li>
            <Switcher />
          </li>
        </ul>

        <div className="absolute p-6 justify-center top-2 z-10">
          <h1 className="mb-6 text-4xl font-merienda text-white  font-extrabold ">
            About Us
          </h1>

          <p className="mb-8  font-merienda text-white text-xl font-bold ">
            Welcome to the About Us page of Friendzone! <br />
            We are a group of passionate about ice cream{" "}
            <ion-icon name="ice-cream-outline"></ion-icon> and code on a journey
            to master the art of web development . <br />
            Our goal is to unite people, where technology is often accused of
            dividing. <br />
            We want to allow a tool within everyone's reach that can allow you
            to create significant bonds, choosing people with similar interests,
            why not even totally opposite ones but with whom a special
            understanding is created, and provide a tool for all introverts in
            the world who wish to launch themselves in their hearts in social
            life, which is what makes us human
            <span className="font-extrabold text-2xl">
              <ion-icon name="heart-outline"></ion-icon>
            </span>
            .
          </p>
        </div>

        <h2 className="m-6 dark:text-white  text-2xl font-semibold">
          Meet the Ice Cream Team:
        </h2>

        <div className="grid grid-cols-2 place-items-center flex-wrap gap-8 mx-auto">
          {team2.map((member, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className="w-[350px] flex-col justify-center bg-white rounded-lg shadow-md"
              style={{
                boxShadow: `0 0 10px rgba(0, 0, 255, 0.7)${
                  hoveredIndex === index ? ", 0 0 20px 5px purple" : ""
                }`,
              }}
            >
              <div className="flex-col justify-center ms-6">
               
                <div className="p-4">
                   <img
                  className="w-[260px] h-[300px] transition-opacity duration-500"
                  src={
                    hoveredIndex === index
                      ? member.images[imageIndex]
                      : member.images[0]
                  }
                  alt="team member photo"
                />
                  <h2 className="mb-2 p-2 text-lg font-semibold">
                    {member.name}
                  </h2>
                  <h3 className="p-2 text-gray-600">{member.role}</h3>
                  <h4>
                    My loved taste: {member.iceCream}
                    <span className="inline-block">
                      <DinamicColor>
                        <IoIceCream />
                      </DinamicColor>
                    </span>
                  </h4>
                  <p className="p-2">Passions: {member.passions} </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <img
        className="md:p-4 lg:w-[300px] w-[100px] z-30 custom-bounce absolute right-4"
        src={iceCream}
        alt="icecream 4"
      />
    </div>
  );
};

export default AboutUsPage;