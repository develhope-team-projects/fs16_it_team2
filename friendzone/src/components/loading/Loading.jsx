import videoLoading from "../../assets/videos/loading/loading.webm";
import bgl from "../../assets/images/backgrounds/bg-light.png";
import useDarkSide from "../../customHooks/useDarkSide";
const Loading = () => {
  const [colorTheme, setTheme] = useDarkSide();

  const backgroundImage = colorTheme === "dark" ? `url(${bgl})` : `url(${bgl})`;
  return (
    <div
      className="flex flex-col items-center justify-center  w-full h-screen p-5"
      style={{ backgroundImage, backgroundSize: "cover" }}
    >
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
