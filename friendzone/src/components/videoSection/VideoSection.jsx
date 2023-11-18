import video from "../../assets/videos/landingPage/mainvideo.mp4";

const VideoSection = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center h-full mx-auto">
        <video autoPlay loop muted className="mx-auto custom-box-shadow">
          <source src={video} type="video/mp4" />
          Il tuo browser potrebbe non supportare la riproduzione di video.
        </video>
      </div>
    </div>
  );
};

export default VideoSection;
