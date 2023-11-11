import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";


const ReviewCarousel = ({reviews}) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="p-10 font-semibold">
      <Carousel responsive={responsive}>
        {reviews.map((item, index) => (
          <div className="flex justify-center h-70" key={index}>
            <div className=" max-w-sm bg-white rounded-xl overflow-hidden">
              <div className="py-4 w-100% flex justify-center bg-gradient-to-t from-[#fbf7f7] to-[#140426] ">
                <FaQuoteLeft className="text-4xl text-gray-600" />
                <img
                  className="card-review-img p-5"
                  src={item.img}
                  alt="Immagine della card"
                />
              </div>

              <div className=" flex-col justify-center px-6 py-3 ">
                <div className="h-[100px] flex-col mb-5">
                  <h2 className="font-bold text-xl mb-2">{item.name}</h2>
                  <i className="flex  text-yellow-500">
                    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  </i>
                  <p className="text-gray-700   text-base">{item.paragraph}</p>
                </div>

                <div className="px-6 pt-4 flex-col justify-center">
                  <button className="bg-indigo-200 w-[100%] p-4 bg- rounded-3xl  hover:bg-[#966ab2] hover:text-white ;">
                    Chat with {item.name}
                    <i className="hover:text-[#e058cc] text-2xl">
                      <ion-icon name="ice-cream-outline"></ion-icon>
                    </i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ReviewCarousel;
