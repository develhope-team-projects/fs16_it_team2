import Card from "./Card";
import HeroSection from "./HeroSection";
import VideoSection from "./VideoSection";
import photoUno from "../../src/assets/media-lp/fotocard1.png";
import photoDue from "../assets/media-lp/photo2card.png";
import ReviewCarousel from "./ReviewCarousel";

const cardContent = [
  {
    title: "Leave the 'Friendzone' behind and embrace the adventure of making new friends with FriendZone", //contents to modify
    paragraph: "Life is too short not to make new friends. Sign up and start creating meaningful bonds",
    img: photoUno,
  },
  {
    title: "The Friendzone now it's an opportunity!", //contents to modify
    paragraph: "New friends, new stories...",
    img: photoDue,
  },
];

const LandingPage = () => {
  return (
    <div className="flex-col font-sans  bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee]">
      <HeroSection />
      <Card card={cardContent[0]} />
      <VideoSection />
      <Card card={cardContent[1]} />
    <ReviewCarousel/>

    </div>
  );
};

export default LandingPage;
