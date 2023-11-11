import "../components-lp/Landing-page.css";
import Card from "./Card";
import HeroSection from "./HeroSection";
import VideoSection from "./VideoSection";
import photoUno from "../../src/assets/media-lp/fotocard1.png";
import photoDue from "../assets/media-lp/photo2card.png";
import ReviewCarousel from "./ReviewCarousel";

import img1 from "../assets/media-lp/review.png";
import img2 from "../assets/media-lp/review3.png";
import img3 from "../assets/media-lp/review4.png";
import img4 from "../assets/media-lp/review5.png";
import img5 from "../assets/media-lp/review6.png";
import img6 from "../assets/media-lp/review7.png";
import img7 from "../assets/media-lp/review8.png";
import img9 from "../assets/media-lp/review10.png";
import img10 from "../assets/media-lp/review2.png";
import Footer from "./footer";

const cardContent = [
  {
    title:
      "Leave the 'Friendzone' behind and embrace the adventure of making new friends with FriendZone", //contents to modify
    paragraph:
      "Life is too short not to make new friends. Sign up and start creating meaningful bonds",
    img: photoUno,
  },
  {
    title: "The Friendzone now it's an opportunity!", //contents to modify
    paragraph: "New friends, new stories...",
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
  return (
    <div className="flex-col font-sans  bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee]">
      <HeroSection />
      <Card card={cardContent[0]} />
      <VideoSection />
      <Card card={cardContent[1]} />
      <ReviewCarousel reviews={reviews} />
      <Footer/>
    </div>
  );
};

export default LandingPage;
