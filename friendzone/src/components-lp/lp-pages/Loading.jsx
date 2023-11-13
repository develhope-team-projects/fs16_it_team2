import videoLoading from "../../assets/media-lp/loading.mp4";
import imglogo from "../../assets/images/brand/full-logo-row.png";
import Logo from "../Logo";

const Loading = () => {
  return (
    <div className="flex items-center justify-center flex-col p-5">
      <div>
        <Logo logo={imglogo} />
      </div>

      <div className="flex items-center justify-center w-3/4 mx-auto h-full">
        <video autoPlay loop muted className="mx-auto">
          <source src={videoLoading} type="video/mp4" />
          Loading...
        </video>
      </div>
    </div>
  );
};

export default Loading;
