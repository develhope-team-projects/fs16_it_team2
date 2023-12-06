import "./Landing-page.css";
import HeroSection from "../heroSection/HeroSection";

import ReviewCarousel from "../reviewCarousel/ReviewCarousel";
import Loading from "../loading/Loading";
import Footer from "../footer/Footer";

import photoUno from "../../assets/images/landingPage/fotocard1.png";
import photoDue from "../../assets/images/landingPage/photo2card.png";
import img1 from "../../assets/images/landingPage/review.png";
import img2 from "../../assets/images/landingPage/review3.png";
import img3 from "../../assets/images/landingPage/review4.png";
import img4 from "../../assets/images/landingPage/review5.png";
import img5 from "../../assets/images/landingPage/review6.png";
import img6 from "../../assets/images/landingPage/review7.png";
import img7 from "../../assets/images/landingPage/review8.png";
import img9 from "../../assets/images/landingPage/review10.png";
import img10 from "../../assets/images/landingPage/review2.png";

import { useEffect, useState } from "react";
import CentralSection from "../centralSection/CentralSection";

const cardContent = [
  {
    title: "Friendzone: Where Being 'Zoned' is a Win!",
    paragraph: "Ready to flip the script on the Friendzone? Welcome to the Friendzone, where being in is a victory lap! No awkwardness, just good times, shared laughs, and heaps of new connections. Join us, because in this Friendzone, friendship always takes the spotlight!",
    subtitle: "Find New Friends, Wherever You Are!",
    paragraph2:
      "Whether you have moved to a new city, noticed a decrease in the number of friends over time, or simply want to expand your social circle, Friendzone is the answer. We are here to help you meet fantastic people with similar interests.",
    img: photoUno,
  },
  {
    title: "Share Interests, Create Lasting Connections!", //contents to modify
    paragraph:
      "We've created Friendzone to make it easy to search for new friendships based on common passions. Whether you're a tech enthusiast, sports lover, or aspiring chef, there's someone here who wants to share their passion with you.",
    subtitle: "Friendzone: Where Distance is Just a Number!",
    paragraph2:
      "We've overcome the barriers of distance to allow you to connect with extraordinary people, no matter where you are. Join our community and discover how wonderful it can be to make new friends through technology!",
    subtitle2: "Download Friendzone today and start your social adventure!",
    img: photoDue,
  },
];

const reviews = [
  {
    img: img1,
    name: "Cloe",
    paragraph:
      "This app removed the pressure of searching for a soulmate. I've made many genuine friendships.",
  },
  {
    img: img2,
    name: "Juan",
    paragraph:
      "I was very skeptical at first, but it introduced me to amazing people. I learned not to underestimate online dating.",
  },
  {
    img: img9,
    name: "Marnie",
    paragraph:
      "I'm finally surrounded by friends who share my passion for comics. I've never met such like-minded people!",
  },
  {
    img: img7,
    name: "Holly",
    paragraph:
      "I just moved to a new city, and it helped me find friends who know all the best places.",
  },
  {
    img: img3,
    name: "Marshall",
    paragraph:
      "In this incredible app, I stumbled upon a magical community of fellow Magic enthusiasts!",
  },
  {
    img: img6,
    name: "Charlotte",
    paragraph:
      "I was longing for travel companions, and this app connected me with a group of adventurous souls. Unforgettable memories.",
  },
  {
    img: img4,
    name: "Gaz",
    paragraph:
      "This app led me to a group of Latin music lovers, nights out have never been more fun!",
  },
  {
    img: img5,
    name: "Sophie",
    paragraph:
      "I was looking for workout buddies, and this app introduced me to a fitness community that's become like family!",
  },
  {
    img: img10,
    name: "Adam",
    paragraph:
      "My foodie heart is happy. Thanks to this app, I've joined a community of fellow food lovers and culinary explorers.",
  },
];

const LandingPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex-col  font-quick background-landing-page">
          <HeroSection />
          <CentralSection cardContent={cardContent} />
          <ReviewCarousel reviews={reviews} />
          <Footer />
        </div>
      )}
    </>
  );
};

export default LandingPage;
/* bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] */
