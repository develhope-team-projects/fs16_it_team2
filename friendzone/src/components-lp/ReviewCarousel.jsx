import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../assets/media-lp/review.png";
import img2 from "../assets/media-lp/review3.png";
import img3 from "../assets/media-lp/review4.png";
import img4 from "../assets/media-lp/review5.png";
import img5 from "../assets/media-lp/review6.png";
import img6 from "../assets/media-lp/review7.png";
import img7 from "../assets/media-lp/review8.png";
import img9 from "../assets/media-lp/review10.png";
import img10 from "../assets/media-lp/review2.png";

import { PiShootingStarBold } from "react-icons/pi";

const reviews = [
  {
    img: img1,
    name: "Cloe",
    paragraph:
      "This app removed the pressure of searching for a soulmate. I've made many genuine friendships.",
  },
  {
    img: img2,
    name: "Juan",
    paragraph:
      "I was very skeptical at first, but it introduced me to amazing people. I learned not to underestimate online dating.",
  },
  {
    img: img9,
    name: "Robin",
    paragraph:
      "I'm finally surrounded by friends who share my passion for comics. I've never met such like-minded people!",
  },
  {
    img: img7,
    name: "Lily",
    paragraph:
      "I just moved to a new city, and it helped me find friends who know all the best places.",
  },
  {
    img: img3,
    name: "Marshall",
    paragraph:
      "In this incredible app, I stumbled upon a magical community of fellow Magic enthusiasts!",
  },
  {
    img: img6,
    name: "Charlotte",
    paragraph:
      "I was longing for travel companions, and this app connected me with a group of adventurous souls. Unforgettable memories.",
  },
  {
    img: img4,
    name: "Gaz",
    paragraph:
      "This app led me to a group of Latin music lovers, nights out have never been more fun!",
  },
  {
    img: img5,
    name: "Sophie",
    paragraph:
      "I was looking for workout buddies, and this app introduced me to a fitness community that's become like family!",
  },
  {
    img: img10,
    name: "Adam",
    paragraph:
      "My foodie heart is happy. Thanks to this app, I've joined a community of fellow food lovers and culinary explorers.",
  },
];

const ReviewCarousel = () => {
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
            <div className=" w-90 max-w-sm bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="py-4 w-100% flex justify-center bg-gradient-to-t from-[#fbf7f7] to-[#c5b0dc] ">
                <img
                  className="card-review-img p-5"
                  src={item.img}
                  alt="Immagine della card"
                />
              </div>

              <div className=" flex-col justify-center px-6 py-3 ">
                <div className="h-[100px] flex-col mb-5">
                  <h2 className="font-bold text-xl mb-2">{item.name}</h2>
                  <i>
                    <PiShootingStarBold />
                  </i>
                  <p className="text-gray-700  text-base">{item.paragraph}</p>
                </div>

                <div className="px-6 pt-4 flex-col justify-center">
                  <button  className="bg-indigo-200  p-4 bg- rounded-3xl  hover:bg-[#966ab2] hover:text-white ;">
                    Chat with {item.name}
                    <i className=" hover:text-[#e058cc]">
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
