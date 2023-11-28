import DinamicColor from "../dinamicColorIce/DinamicColor";
import { IoIceCream } from "react-icons/io5";


const Card = ({ card }) => {
  return (
    <div className="md:flex items-center justify-center 2xl:h-screen relative">
      <div className="relative z-0 lg:mt-4  lg:h-54 custom-box-shadow ">
        <img src={card.img} alt="photo first card" />
      </div>

      <div className=" md:w-1/2 2xl:w-1/3 p-10 text-center ">
        <DinamicColor>
          <h1 className="text-2xl font-bold dark:text-white ">
            <span>{<IoIceCream />}</span>
            {card.title}
          </h1>
        </DinamicColor>
        <p className="pb-5 dark:text-white text-xl">{card.paragraph}</p>
        <>
     
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {card.subtitle}
          </h2>
        </>
        <p className=" dark:text-white text-xl">{card.paragraph2}</p>
      </div>
    </div>
  );
};

export default Card;