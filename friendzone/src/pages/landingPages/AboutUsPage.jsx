import { Link } from "react-router-dom";
import CircleComponent from "../../components/animationCircles/CircleComponent";
import imgele1 from "../../assets/images/landingPage/about-us/eleonora-photo.jpeg";
import imgele2 from "../../assets/images/landingPage/about-us/crossfit.png";
import imgele3 from "../../assets/images/landingPage/about-us/reggeaton.png";
import imgMiriana1 from "../../assets/images/landingPage/about-us/miriana.jpg";
import imgMiriana2 from "../../assets/images/landingPage/about-us/japan.png";
import imgMiriana3 from "../../assets/images/landingPage/about-us/books.png";
import iceCream from "../../assets/images/icecreams/2icecrm.png";
import { useEffect, useState } from "react";
import background from "../../assets/images/landingPage/about-us/sfondo.jpg";
import { IoIceCream } from "react-icons/io5";
import DinamicColor from "../../components/dinamicColorIce/DinamicColor";


const team2 = [
  {
    name: "Eleonora Melodia",
    role: "Junior Full-Stack Developer",
    iceCream: "Dark chocolate!",
    passions: "Crossfit and reggeaton",
    images: [imgele1, imgele2, imgele3],
  },
  {
    name: "Miriana Falcone",
    role: "Junior Full-Stack Developer",
    iceCream: "Vanilla!",
    passions: "Books and Japan world!",
    images: [imgMiriana1, imgMiriana2, imgMiriana3],
  },
];

const AboutUsPage = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;

    // Cambio veloce delle immagini quando l'utente è in hover
    if (isHovered) {
      interval = setInterval(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % team2.length);
      }, 800);
    }

    // Pulisce l'intervallo quando l'utente esce dall'hover o il componente si smonta
    return () => {
      clearInterval(interval);
    };
  }, [isHovered]);

  return (
    <div className="h-screen font-quick relative">
      <img
        className="object-cover w-full h-[35vh]"
        src={background}
        alt="Hero Background"
      />

      <CircleComponent />

      <div className="container mx-auto">
        <Link
          to="/"
          className="flex items-center mb-4 left-2 z-10 absolute text-purple-500 hover:underline"
        >
          <ion-icon name="home" className="mr-2"></ion-icon>
          Back to Home
        </Link>
        <div className="absolute p-6 justify-center top-2 z-10">
          <h1 className="mb-6 dark:text-white text-4xl  font-extrabold ">
            About Us
          </h1>

          <p className="mb-8 dark:text-white text-xl font-bold ">
            Welcome to the About Us page of Friendzone! <br />
            We are a group of passionate full-stack developers on a journey to
            master the art of software development. <br />
            Our goal is to unite people, where technology is often accused of
            dividing. <br />
            We want to allow a tool within everyone's reach that can allow you
            to create significant bonds, choosing people with similar interests,
            why not even totally opposite ones but with whom a special
            understanding is created, and provide a tool for all introverts in
            the world who wish to launch themselves in their hearts in social
            life, which is what makes us human
            <span className="text-white text-2xl">
              <ion-icon name="heart-outline"></ion-icon>
            </span>
            .
          </p>
        </div>

        <h2 className="m-6 dark:text-white text-2xl font-semibold">
          Meet the Team
        </h2>

        <div className="grid grid-cols-2 place-items-center flex-wrap gap-8">
          {/* Itera attraverso gli oggetti nell'array 'team2' */}
          {team2.map((member, index) => (
            <div
              key={index}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => {
                setIsHovered(false);
                // Resetta l'indice dell'immagine quando l'utente esce dall'hover
                setImageIndex(0);
              }}
              className="p-6 w-[300px] flex-col justify-center mr-2 bg-white rounded-lg shadow-md"
            >
              <img
                className="w-full h-[300px] transition-opacity duration-500"
                src={member.images[imageIndex]}
                alt="team member photo"
              />
              <h2 className="mb-2 text-lg font-semibold">{member.name}</h2>
              <h3 className="text-gray-600">{member.role}</h3>
              <h4>My loved taste: {member.iceCream} <span> <DinamicColor>{<IoIceCream/>}</DinamicColor> </span> </h4>
              <p>Passions: {member.passions} </p>
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
