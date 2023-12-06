import { Link } from "react-router-dom";
import Premium from "../../pages/sidebar/Premium";

const Products = () => {
  return (
    <>
      <div className="relative flex items-center justify-center w-full h-screen">
        <div className="absolute z-10 top-10 left-10">
          <Link
            to="/"
            className="flex items-center mb-4 text-xl text-purple-500 hover:underline"
          >
            <ion-icon name="home" className="mr-2 text-7xl"></ion-icon>
            Back to Home
          </Link>
        </div>
        <Premium />
      </div>
    </>
  );
};

export default Products;
