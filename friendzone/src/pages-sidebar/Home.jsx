import SliderComponent from "../components/07-slider/SliderComponent";
import MyProfileCard from "../components/MyProfileCard";

const Home = () => {
  return (
    <div className="flex flex-col bg-white   dark:bg-black dark:border-gray-700">
      <MyProfileCard />

      <SliderComponent />
    </div>
  );
};

export default Home;
