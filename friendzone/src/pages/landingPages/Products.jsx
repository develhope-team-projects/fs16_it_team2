import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="container mx-auto mt-8">
      <Link to="/" className="flex items-center mb-4 text-purple-500 hover:underline">
        <ion-icon name="home" className="mr-2"></ion-icon>
        Back to Home
      </Link>
      <h1 className="mb-6 text-4xl font-bold">Friendzone Subscriptions</h1>
      <p className="mb-8 text-gray-600">
        Upgrade your Friendzone experience with our premium subscriptions. Find
        the perfect plan for you.
      </p>

      <div className="flex items-center justify-center">
        {/* Subscription Plans */}
        <div className="flex flex-col gap-8 md:flex-row">
          {/* Basic Plan */}
          <div className="p-8 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-xl font-semibold">Basic Plan</h2>
            <p className="mb-4 text-gray-600">Access to basic features</p>
            <p className="text-2xl font-bold text-[#e058cc] mb-4">
              $9.99/month
            </p>
            <button className="bg-[#e058cc] text-white py-2 px-4 rounded-full">
              Subscribe
            </button>
          </div>

          {/* Premium Plan */}
          <div className="p-8 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-xl font-semibold">Premium Plan</h2>
            <p className="mb-4 text-gray-600">Unlock all premium features</p>
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
