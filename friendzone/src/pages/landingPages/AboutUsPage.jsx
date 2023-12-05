import { Link } from "react-router-dom";
import CircleComponent from "../../components/animationCircles/CircleComponent";
import img1 from "../../assets/images/landingPage/eleonora-photo.jpeg";
import iceCream from "../../assets/images/icecreams/2icecrm.png"


const AboutUsPage = () => {
  return (
    <div className="container font-quick mx-auto mt-8">
      <CircleComponent />
      <Link
        to="/"
        className="flex items-center mb-4 text-purple-500 hover:underline"
      >
        <ion-icon name="home" className="mr-2"></ion-icon>
        Back to Home
      </Link>

      <h1 className="mb-6 dark:text-white text-4xl font-bold">About Us</h1>

      <p className="mb-8 dark:text-white text-xl text-gray-600">

          Welcome to the About Us page of Friendzone! <br />
        We are a group of passionate full-stack developer on a journey to master the art of software
          development. <br />
        Our goal is to unite people, where technology is often
        accused of dividing. <br />
        We want to allow a tool within everyone's reach
        that can allow you to create significant bonds, choosing people with
        similar interests, why not even totally opposite ones but with whom a
        special understanding is created, and provide a tool for all introverts
        in the world who wish to launch themselves in their hearts in social
        life, which is what makes us human <span className="text-white text-2xl"><ion-icon name="heart-outline"></ion-icon></span> .
      
       
      </p>

      <h2 className="mb-4 dark:text-white text-2xl font-semibold">
        Meet the Team
      </h2>

      <div className="flex  flex-wrap gap-8">
        {/* Eleonora Melodia */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <img className="w-[200px]" src={img1} alt="team member photo" />
          <h3 className="mb-2 text-lg font-semibold">Eleonora Melodia</h3>
          <p className="text-gray-600">Junior Full Stack Developer</p>
        </div>

        {/* Luigi Rauso */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="mb-2 text-lg font-semibold">Luigi Rauso</h3>
          <p className="text-gray-600">Full Stack Developer Trainee</p>
        </div>

        {/* Miriana Falcone */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="mb-2 text-lg font-semibold">Miriana Falcone</h3>
          <p className="text-gray-600">Full Stack Developer Trainee</p>
        </div>

        {/* Desiré Passalacqua */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="mb-2 text-lg font-semibold">Desiré Passalacqua</h3>
          <p className="text-gray-600">Full Stack Developer Trainee</p>
        </div>

        {/* Monica Lucaci */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="mb-2 text-lg font-semibold">Monica Lucaci</h3>
          <p className="text-gray-600">Full Stack Developer Trainee</p>
        </div>
      </div>
    <img
        className="md:p-4 lg:w-[300px] w-[100px] z-30 custom-bounce absolute right-4 "
        src={iceCream}
        alt="icecream 4"
      />
    </div>
  );
};

export default AboutUsPage;
