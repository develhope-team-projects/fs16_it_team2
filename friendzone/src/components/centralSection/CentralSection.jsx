import CircleComponent from "../animationCircles/CircleComponent";
import Card from "../card/Card";
import VideoSection from "../videoSection/VideoSection";
import icecream1 from "../../assets/images/icecreams/2icecrm.png";
import icecream2 from "../../assets/images/icecreams/weird4Balls.png";
import icecream3 from "../../assets/images/icecreams/blue.png";
import icecream4 from "../../assets/images/icecreams/yellow.png";

const CentralSection = ({ cardContent }) => {
  return (
    <div className="relative p-2">
      <img
        className="z-30 md:p-4 md:w-40 w-20 custom-bounce absolute right-1 bottom-0 md:right-10 md:bottom-10"
        src={icecream1}
        alt="icecream 1"
      />
      <img
        className=" md:p-4 md:w-40 w-20 z-30 custom-bounce absolute right-0 top-1/4 md:right-10 md:top-1/4"
        src={icecream3}
        alt="icecream 3"
      />
      <img
        className="md:p-4 md:w-40 w-20 z-30 custom-bounce absolute top-10 left-0 md:top-10 md:left-10"
        src={icecream2}
        alt="icecream 2"
      />
      <img
        className="md:p-4 md:w-40 w-20 z-30 custom-bounce absolute bottom-1/4 md:bottom-1/4 md:left-10"
        src={icecream4}
        alt="icecream 4"
      />
      
      <div className="absolute flex items-center justify-center md:w-full h-full ">
        <CircleComponent />
      </div>
      <div className="sm:flex-col md:flex-col md:flex z-1 items-center justify-center w-[100%]"> 
        <Card card={cardContent[0]} />

        <VideoSection />
        
        <Card  card={cardContent[1]} />
      </div>
    </div>
  );
};

export default CentralSection;
