import { Link } from "react-router-dom";

const AboutUsPage = () => {
  return (
    <div className="container mx-auto mt-8">
      <Link to="/" className="flex items-center mb-4 text-purple-500 hover:underline">
        <ion-icon name="home" className="mr-2"></ion-icon>
        Back to Home
      </Link>
      <h1 className="mb-6 text-4xl font-bold">About Us</h1>

      <p className="mb-8 text-gray-600">
        Welcome to the About Us page of Friendzone! We are a group of passionate
        full-stack developer trainees on a journey to master the art of software development.
        Our goal is to leverage technology to create meaningful connections in today's digital age.
      </p>

      <h2 className="mb-4 text-2xl font-semibold">Meet the Team</h2>

      <div className="flex flex-wrap gap-8">
        {/* Eleonora Melodia */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="mb-2 text-lg font-semibold">Eleonora Melodia</h3>
          <p className="text-gray-600">Full Stack Developer Trainee</p>
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
    </div>
  );
};

export default AboutUsPage;
