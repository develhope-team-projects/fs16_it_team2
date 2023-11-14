import DinamicIceCreams from "./dinamic-color-ice/DinamicIceCreams";

const Card = ({ card }) => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center p-10 w-1/4">
        <h1 className="text-2xl font-bold">
          <DinamicIceCreams />
          {card.title}
        </h1>
        <p className="text-l pb-5">{card.paragraph}</p>
        <h2 className="text-xl text-gray-900 font-semibold">
          <DinamicIceCreams />
          {card.subtitle}
        </h2>
        <p className="text-l">{card.paragraph2}</p>
      </div>
      <div className="relative w-1/3 h-54 mt-4">
        <img src={card.img} alt="photo first card" />
      </div>
    </div>
  );
};

export default Card;
