import video from "../../assets/videos/landingPage/mainvideo.mp4";

const VideoSection = () => {
  return (
    <div className="flex items-center justify-center w-3/5 h-full mx-auto">
      <video autoPlay loop muted className="mx-auto">
        <source src={video} type="video/mp4" />
        Il tuo browser potrebbe non supportare la riproduzione di video.
      </video>
    </div>
  );
};

export default VideoSection;
