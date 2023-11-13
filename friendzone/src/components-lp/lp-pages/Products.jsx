import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="container mx-auto mt-8">
      <Link to="/" className="text-purple-500 hover:underline flex items-center mb-4">
        <ion-icon name="home" className="mr-2"></ion-icon>
        Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-6">Friendzone Subscriptions</h1>
      <p className="text-gray-600 mb-8">
        Upgrade your Friendzone experience with our premium subscriptions. Find
        the perfect plan for you.
      </p>

      <div className="flex justify-center items-center">
        {/* Subscription Plans */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Basic Plan */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Basic Plan</h2>
            <p className="text-gray-600 mb-4">Access to basic features</p>
            <p className="text-2xl font-bold text-[#e058cc] mb-4">
              $9.99/month
            </p>
            <button className="bg-[#e058cc] text-white py-2 px-4 rounded-full">
              Subscribe
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Premium Plan</h2>
            <p className="text-gray-600 mb-4">Unlock all premium features</p>
            <p className="text-2xl font-bold text-[#e058cc] mb-4">
              $19.99/month
            </p>
            <button className="bg-[#e058cc] text-white py-2 px-4 rounded-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
