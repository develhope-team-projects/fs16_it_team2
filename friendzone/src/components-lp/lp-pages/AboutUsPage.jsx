import { Link } from "react-router-dom";

const AboutUsPage = () => {
  return (
    <div className="container mx-auto mt-8">
      <Link to="/" className="text-purple-500 hover:underline flex items-center mb-4">
        <ion-icon name="home" className="mr-2"></ion-icon>
        Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-6">About Us</h1>

      <p className="text-gray-600 mb-8">
        Welcome to the About Us page of Friendzone! We are a group of passionate
        full-stack developer trainees on a journey to master the art of software development.
        Our goal is to leverage technology to create meaningful connections in today's digital age.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>

      <div className="flex flex-wrap gap-8">
        {/* Eleonora Melodia */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Eleonora Melodia</h3>
          <p className="text-gray-600">Full Stack Developer Trainee</p>
        </div>

        {/* Luigi Rauso */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Luigi Rauso</h3>
          <p className="text-gray-600">Full Stack Developer Trainee</p>
        </div>

        {/* Miriana Falcone */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Miriana Falcone</h3>
          <p className="text-gray-600">Full Stack Developer Trainee</p>
        </div>

        {/* Desiré Passalacqua */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Desiré Passalacqua</h3>
          <p className="text-gray-600">Full Stack Developer Trainee</p>
        </div>

        {/* Monica Lucaci */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Monica Lucaci</h3>
          <p className="text-gray-600">Full Stack Developer Trainee</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
