import videoLoading from "../../assets/media-lp/loading-2.mp4";
import imglogo from "../../assets/images/brand/full-logo-column.png";
import Logo from "../logo/Logo";

const Loading = () => {
  return (
    <div className="flex items-center justify-center flex-col p-5">
      <div className="w-1/4">
        <Logo logo={imglogo} />
      </div>

      <div className="flex items-center justify-center w-1/3 mx-auto h-full">
        <video autoPlay loop muted className="mx-auto">
          <source src={videoLoading} type="video/mp4" />
          Loading...
        </video>
      </div>
    </div>
  );
};

export default Loading;
