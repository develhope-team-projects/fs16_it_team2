import SliderComponent from "../components/07-slider/SliderComponent";
import MyProfileCard from "../components/Myprofile/MyProfileCard";

const Home = () => {
  
  return (
    <div className="flex  flex-col  justify-center w-full bg-transparent   dark:bg-transparent border-none ">
      <MyProfileCard />
      <div className="border-t-2 mt-5 border-purple-800 dark:border-white custom-shadow-box"></div>
      <SliderComponent className="flex-1"/>
    </div>
  );
};

export default Home;
