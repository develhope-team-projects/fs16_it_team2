import SliderComponent from "../../components/slider/SliderComponent";
import MyProfileCard from "../../components/Myprofile/MyProfileCard";

const Home = () => {
  return (
    <div className="flex flex-col justify-center w-full bg-transparent border-none dark:bg-transparent ">
      <MyProfileCard />
      <div className="mt-5 border-t-2 border-purple-800 dark:border-white custom-shadow-box"></div>
      <SliderComponent className="flex-1" />
    </div>
  );
};

export default Home;
