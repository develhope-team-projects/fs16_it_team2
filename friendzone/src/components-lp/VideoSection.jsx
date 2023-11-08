import video from "../assets/media-lp/mainvideo.mp4";

const VideoSection = () => {
  return (
    <div className="flex items-center justify-center w-3/4 mx-auto h-full">
      <video autoPlay loop muted className="mx-auto">
        <source src={video} type="video/mp4" />
        Il tuo browser potrebbe non supportare la riproduzione di video.
      </video>
    </div>
  );
};

export default VideoSection;
