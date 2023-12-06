import video from "../../assets/videos/landingPage/herosection.mp4";

const VideoSection = () => {
  return (
    <div className="md:w-[70%]">
      <div className="flex items-center justify-center h-full mx-auto">
        <video autoPlay loop muted className="mx-auto mb-4 lg:m-0 custom-box-shadow">
          <source src={video} type="video/mp4" />
          Il tuo browser potrebbe non supportare la riproduzione di video.
        </video>
      </div>
    </div>
  );
};

export default VideoSection;
