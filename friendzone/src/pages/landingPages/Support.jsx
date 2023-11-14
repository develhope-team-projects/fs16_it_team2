import { Link } from "react-router-dom";

const Support = () => {
  return (
    <div className="container mx-auto mt-8">
      <Link
        to="/"
        className="flex items-center mb-4 text-purple-500 hover:underline"
      >
        <ion-icon name="home" className="mr-2"></ion-icon>
        Back to Home
      </Link>
      <h1 className="mb-6 text-4xl font-bold">Support</h1>

      <p className="mb-8 text-gray-600">
        At Friendzone, we are dedicated to providing the best support to our
        users. If you have any questions or need assistance, please don't
        hesitate to reach out to us.
      </p>

      <h2 className="mb-4 text-2xl font-semibold">Contact Us</h2>

      <p className="mb-4 text-gray-600">
        For general inquiries, please send an email to{" "}
        <strong>info@friendzone.com</strong>.
      </p>

      <p className="mb-4 text-gray-600">
        If you need technical support, contact our support team at{" "}
        <strong>support@friendzone.com</strong>.
      </p>

      <p className="mb-4 text-gray-600">
        For press and media inquiries, please reach out to{" "}
        <strong>press@friendzone.com</strong>.
      </p>

      <p className="text-gray-600">
        Our support team is available 24/7 to assist you with any issues or
        concerns. We appreciate your feedback and strive to make Friendzone the
        best it can be.
      </p>
    </div>
  );
};

export default Support;
