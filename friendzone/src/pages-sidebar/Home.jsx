import SliderComponent from "../components/07-slider/SliderComponent";
import MyProfileCard from "../components/MyProfileCard";

const Home = () => {
  return (
    <div className="flex  flex-col bg-transparent   dark:bg-transparent border-none">
      <MyProfileCard />
      <div className="border-t-2 border-purple-800 dark:border-white custom-shadow-box"></div>
      <SliderComponent />
    </div>
  );
};

export default Home;
