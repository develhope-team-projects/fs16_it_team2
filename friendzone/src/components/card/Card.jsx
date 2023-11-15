import DinamicIceCreams from "../dinamicColorIce/DinamicIceCreams";

const Card = ({ card }) => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="w-1/4 p-10 text-center ">
        <h1 className="text-2xl font-bold dark:text-white ">
          <DinamicIceCreams />
          {card.title}
        </h1>
        <p className="pb-5 dark:text-white text-l">{card.paragraph}</p>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          <DinamicIceCreams />
          {card.subtitle}
        </h2>
        <p className=" dark:text-white text-l">{card.paragraph2}</p>
      </div>
      <div className="relative w-1/3 mt-4 h-54 custom-box-shadow">
        <img src={card.img} alt="photo first card" />
      </div>
    </div>
  );
};

export default Card;
