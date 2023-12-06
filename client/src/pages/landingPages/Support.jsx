import { Link } from "react-router-dom";
import CircleComponent from "../../components/animationCircles/CircleComponent";
import iceCream from "../../assets/images/icecreams/glasses.png"

const Support = () => {
  return (
    <div className="container font-quick p-3 relative mx-auto mt-8">
        <CircleComponent/>
      <Link
        to="/"
        className="flex items-center mb-4 text-purple-500 hover:underline"
      >
        <ion-icon name="home" className="mr-2"></ion-icon>
        Back to Home
      </Link>
      <h1 className="mb-6 dark:text-white  text-xl lg:text-4xl font-bold">Support</h1>

      <p className="mb-8 dark:text-white text-l lg:text-xl text-gray-600">
        At Friendzone, we are dedicated to providing the best support to our
        users. If you have any questions or need assistance, please don't
        hesitate to reach out to us.
      </p>

      <h2 className="mb-4  dark:text-white text-xl lg:text-2xl font-semibold">Contact Us</h2>

      <p className="mb-4  dark:text-white  text-l lg:text-xl  text-gray-600">
        For general inquiries, please send an email to{" "}
        <strong>info@friendzone.com</strong>.
      </p>

      <p className="mb-4 dark:text-white  text-l lg:text-xl text-gray-600">
        If you need technical support, contact our support team at{" "}
        <strong>support@friendzone.com</strong>.
      </p>

      <p className="mb-4 dark:text-white  text-l lg:text-xl text-gray-600">
        For press and media inquiries, please reach out to{" "}
        <strong>team2@friendzone.com</strong>.
      </p>

      <p className="text-gray-600  text-l lg:text-xl dark:text-white">
        Our support team is available 24h/7 to assist you with any issues or
        concerns. We appreciate your feedback and strive to make Friendzone the
        best it can be.
      </p>
       <img
        className="md:p-4 lg:w-[300px] w-[100px] z-30 custom-bounce absolute right-4 "
        src={iceCream}
        alt="icecream 4"
      />
    </div>
  );
};

export default Support;
