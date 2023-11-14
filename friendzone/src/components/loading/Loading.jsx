import videoLoading from "../../assets/videos/loading/loading.webm";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen p-5">
      <div className="flex items-center justify-center w-2/4 h-full mx-auto">
        <video autoPlay loop muted className="mx-auto">
          <source src={videoLoading} type="video/webm" />
          Loading...
        </video>
      </div>
    </div>
  );
};

export default Loading;
