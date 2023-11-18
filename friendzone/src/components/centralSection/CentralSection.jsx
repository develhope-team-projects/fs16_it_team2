import CircleComponent from "../animationCircles/CircleComponent";
import Card from "../card/Card";
import VideoSection from "../videoSection/VideoSection";
import icecream1 from "../../assets/images/icecreams/2icecrm.png";
import icecream2 from "../../assets/images/icecreams/weird4Balls.png";
import icecream3 from "../../assets/images/icecreams/blue.png";
import icecream4 from "../../assets/images/icecreams/yellow.png";

const CentralSection = ({ cardContent }) => {
  return (
    <div className="relative ">
      <img
        className=" p-4 w-60 custom-bounce absolute right-10 bottom-10"
        src={icecream1}
        alt="icecream 1"
      />
      <img
        className=" p-4 w-60 custom-bounce absolute right-10 top-1/4"
        src={icecream3}
        alt="icecream 1"
      />
      <img
        className="p-4 w-60 custom-bounce absolute top-10 left-10"
        src={icecream2}
        alt="icecream 2"
      />
      <img
        className="p-4 w-60 custom-bounce absolute bottom-1/4 left-10"
        src={icecream4}
        alt="icecream 4"
      />
      
      <div className="absolute flex items-center justify-center w-full h-full ">
        <CircleComponent />
      </div>
      <div className="flex flex-col items-center justify-center w-[100%]">
        <Card card={cardContent[0]} />

        <VideoSection />
        
        <Card  card={cardContent[1]} />
      </div>
    </div>
  );
};

export default CentralSection;
