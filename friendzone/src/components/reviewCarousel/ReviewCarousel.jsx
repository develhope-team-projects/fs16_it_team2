import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";


const ReviewCarousel = () => {
const [reviews, setReviews] = useState([]);

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
useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('http://localhost:3003/api/reviews');
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <>
      <div className="p-10 font-semibold">
        <Carousel responsive={responsive}>
          {reviews && reviews.map((item, index) => (
            <div className="flex justify-center md:ms-2 h-70 " key={index}>
              <div className="relative max-w-sm overflow-hidden bg-white rounded-xl custom-box-shadow">
                <div className="py-4 w-full bg-gradient-to-t from-[#fbf7f7] to-[#140426] relative">
                  <FaQuoteLeft className="absolute top-0 mt-4 ml-4 text-4xl text-gray-600 left-4" />
                  <img
                    className="p-5 mx-auto card-review-img"
                    src={item.img}
                    alt="Immagine della card"
                  />
                </div>

                <div className="flex-col justify-center px-6 py-3 ">
                  <div className="h-[100px] flex-col mb-5">
                    <h2 className="mb-2 text-xl font-bold">{item.name}</h2>
                    <i className="flex text-yellow-500">
                      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </i>
                    <p className="text-base text-gray-700">{item.paragraph}</p>
                  </div>

                  <div className="flex-col justify-center px-6 pt-4">
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
    </>
  );
};

export default ReviewCarousel;

