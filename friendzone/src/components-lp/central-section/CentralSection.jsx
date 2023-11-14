import Card from "../card/Card";
import VideoSection from "../video-section/VideoSection";

const CentralSection = ({ cardContent }) => {
  return (
    <div className="flex flex-col items-center justify-center w-100%">
      <Card card={cardContent[0]} />
      <VideoSection />
      <Card card={cardContent[1]} />
    </div>
  );
};

export default CentralSection;
