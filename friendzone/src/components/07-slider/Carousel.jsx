import { useEffect, useState } from "react";
import { shortList, list, longList } from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IoIceCream } from "react-icons/io5";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [people, setPeople] = useState(longList);
  const [currentPerson, setCurrentPerson] = useState(0);

  const prevSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson - 1 + people.length) % people.length;
      return result;
    });
  };
  const nextSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % people.length;
      return result;
    });
  };

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => {
      clearInterval(sliderId);
    };
  }, [currentPerson]);

  return (
    <section className="slider-container flex flex-col justify-center items-center gap-5">
      {people.map((person, personIndex) => {
        const { id, icon, name, title, quote, type } = person;
        return (
          <article
            className="slide"
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
              opacity: personIndex === currentPerson ? 1 : 0,
              visibility: personIndex === currentPerson ? "visible" : "hidden",
            }}
            key={id}
          >
            <div className="flex justify-center items-center mb-5 ">
              <IoIceCream
                size={32}
                className={
                  {
                    "See who likes you": "fill-yellow-500",
                    "Friendzone Platinum": "fill-zinc-500",
                    "Friendzone Plus": "fill-pink-600",
                    "Upgrade your friendishps": "fill-red-600",
                  }[name] || "fill-purple-400"
                }
              />

              <h5
                className={`name text-black dark:text-white font-bold text-2xl`}
              >
                {name}
              </h5>
            </div>
            <p className="title mb-9 dark:text-gray-300">{title}</p>
            <div className="flex justify-center items-center">
              <Link
                to={
                  type === "Friendzone Platinum"
                    ? "/platinum"
                    : type === "Friendzone Gold"
                    ? "/gold"
                    : type === "Friendzone Plus"
                    ? "/plus"
                    : "/premium" // Default link if the type doesn't match any of the specified types
                }
                className="w-80 bg-transparent border-2  dark:hover:bg-gray-900 dark:border-gray-500 hover:bg-purple-100 rounded-full p-5 font-semibold text-xl text-black"
              >
                <div>
                  <span
                    className={
                      {
                        "Friendzone Plus": "text-pink-600",
                        "Friendzone Gold": "text-yellow-500",
                        "Friendzone Platinum": "text-zinc-500",
                        Premium: "text-red-600",
                      }[type] || "text-black"
                    }
                  >
                    Get {type}
                  </span>
                </div>
              </Link>
            </div>
          </article>
        );
      })}
      <button
        type="button"
        className="prev bg-transparent border border-purple-500 text-purple-500  hover:bg-purple-100 dark:hover:bg-gray-900"
        onClick={prevSlide}
      >
        <FiChevronLeft />
      </button>
      <button
        type="button"
        className="next bg-transparent border border-purple-500 text-purple-500 hover:bg-purple-100 dark:hover:bg-gray-900"
        onClick={nextSlide}
      >
        <FiChevronRight />
      </button>
    </section>
  );
};
export default Carousel;
